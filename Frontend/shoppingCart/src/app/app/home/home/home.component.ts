import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/model/category.model';
import { CommonService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public categoryList: Category[] = [];

  constructor(
    private CommonService: CommonService,
    private route: Router
    // CommonService is a common service to handle fetching of data across all the modules and components
  ) { }

  ngOnInit(): void {
  this.getCategories();
  }

  // Function to fetch Categories data - Beverages, Bakery Cakes etc
  getCategories(): void {
    this.CommonService.getCategories().subscribe((categoriesResponse: Category[]) => {
     this.categoryList=  categoriesResponse.map((category) => {

        if (category.enabled) {
         return category;
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
