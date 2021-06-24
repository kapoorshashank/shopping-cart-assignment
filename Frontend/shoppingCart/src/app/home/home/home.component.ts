import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/model/category.model';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoryList: Category[] = [];

  constructor(
    private commonService: CommonService,
    private route: Router
    // CommonService is a service to handle fetching of data across all the modules and components
  ) { }

  ngOnInit(): void {
    // function called at the time of initialisation of the component
  this.getCategories();
  }

  // Function to fetch Categories data - Beverages, Bakery Cakes etc
  getCategories(): void {
    this.commonService.getCategories().subscribe((categoriesResponse: Category[]) => {
      this.categoryList = categoriesResponse.map((category) => {
        return category;
      }).filter((category)=>{
        return category.enabled === true;
      }).sort((a,b)=> {
        return a.order - b.order;
      })
    }, error => {
      console.log('error occured', error);
    });
  }

  exploreProducts(id: String, order: number): void {
    
    this.route.navigate(['/product', {id, order}]);
  }
}
