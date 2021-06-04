import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/shared/model/category.model';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  catagoryList: ICategory[];

  constructor(
    private appService: AppService,
    // AppService is a common service to handle fetching of data across all the modules and components
  ) { }

  ngOnInit(): void {
    // function called at the time of initialisation of the component
  this.getCatagories();
  }

  // Function to fetch Categories data - Beverages, Bakery Cakes etc
  getCatagories(): void {
    this.appService.getCatagories().subscribe(catagoriesResponse => {
      this.catagoryList = catagoriesResponse;
    }, error => {
      console.log('error occured', error);
    });
  }
}
