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
  isErrorOccured: boolean;

  constructor(
    private appService: AppService,

  ) { }

  ngOnInit(): void {
this.getCatagories();
  }
getCatagories(): void {
    this.appService.getCatagories().subscribe(catagoriesResponse => {
      // this.productDataService.categoriesList = catagoriesResponse;
      this.catagoryList = catagoriesResponse;
    }, error => {
      console.log('error occured', error);
      this.isErrorOccured = true;
    });
  }
}
