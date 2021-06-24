import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userData = new BehaviorSubject<string>('');
  userDetails = this.userData.asObservable();

  constructor() { }


setDataInLocalStorage(data: any) {
  const registeredUsersData = JSON.parse(localStorage.getItem('userData')) || [];
  registeredUsersData.push(data);
  localStorage.setItem('userData', JSON.stringify(registeredUsersData));
  this.userData.next(data.name);
}

clearLocalStorage() {
  const retrievedObject = JSON.parse(localStorage.getItem('userData')) || [];
  retrievedObject.forEach((item) => {
    if (item.isActive) {
      item.isActive = false;
    }
  });
  localStorage.setItem('userData', JSON.stringify(retrievedObject));
  this.userData.next('');
}

getSignedInUser() {
  const registeredUsersData = JSON.parse(localStorage.getItem('userData')) || [];
  if (registeredUsersData.length > 0) {
    const activeUser = registeredUsersData.filter((item) => item.isActive);
    if (activeUser.length > 0) {
      this.userData.next(activeUser[0].name);
    }
  }
}

setLoggedInUser(name) {
  this.userData.next(name);
}
}
