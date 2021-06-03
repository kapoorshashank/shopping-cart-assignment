import { Component, OnInit } from '@angular/core';  
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  
import {IBanner} from '../../shared/model/banner.model';
import {AppService} from '../../shared/services/app.service';
@Component({  
  selector: 'app-carousel',  
  templateUrl: './carousel.component.html',  
  styleUrls: ['./carousel.component.scss']  
})  
export class CarouselComponent implements OnInit {  
  bannerList: IBanner[];
  isErrorOccured: boolean;
  constructor(config: NgbCarouselConfig, private appService: AppService) {  
    config.interval = 2000;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = false;  
  }  
  ngOnInit() {
    this.getBannerList();  
  }  

  getBannerList(): void {
    debugger;

    this.appService.getBanners().subscribe(bannersResponse => {
      debugger;
      this.bannerList = bannersResponse;
    }, error => {
      console.log('error occured', error);
      this.isErrorOccured = true;
    });
    console.log("Hola!")
  }
} 