import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/shared/model/category.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoryList: ICategory[] = [];

  constructor(
    private httpService: HttpService,
    private route: Router
    // HttpService is a common service to handle fetching of data across all the modules and components
  ) { }

  ngOnInit(): void {
    // function called at the time of initialisation of the component
  this.getCategories();
  }

  // Function to fetch Categories data - Beverages, Bakery Cakes etc
  getCategories(): void {
    this.httpService.getCategories().subscribe((categoriesResponse: ICategory[]) => {
      categoriesResponse.forEach((category) => {

        if (category.enabled) {
          this.categoryList.push(category);
        }
      });
      this.categoryList = this.categoryList.sort((a, b) => {
        return a.order - b.order;
      });
    }, error => {
      console.log('error occured', error);
    });
  }

  exploreProducts(id: String, order: number): void {
    
    this.route.navigate(['/product', {id, order}]);
  }
}
