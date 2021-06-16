import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/shared/model/category.model';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoryList: ICategory[] = [];

  constructor(
    private appService: AppService,
    private route: Router
    // AppService is a common service to handle fetching of data across all the modules and components
  ) { }

  ngOnInit(): void {
    // function called at the time of initialisation of the component
  this.getCatagories();
  }

  // Function to fetch Categories data - Beverages, Bakery Cakes etc
  getCatagories(): void {
    this.appService.getCatagories().subscribe((catagoriesResponse: ICategory[]) => {
      catagoriesResponse.forEach((category) => {
        
        if (category.enabled) {
          this.categoryList.push(category);
        }
      });
      this.categoryList = this.categoryList.sort((a, b) => {
        return a.order - b.order;
      });
      console.log(this.categoryList);
    }, error => {
      console.log('error occured', error);
    });
  }

  exploreProducts(id: String): void {
    
    this.route.navigate(['/product', {id}]);
  }
}
