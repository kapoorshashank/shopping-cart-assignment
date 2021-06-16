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
  constructor(config: NgbCarouselConfig, private appService: AppService) {
    // configuration setup for carousel data
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  ngOnInit() {
    // function called at the time of initialisation of the component
    this.getBannerList();
  }

  // Function to fetch banner data
  getBannerList(): void {
    this.appService.getBanners().subscribe(bannersResponse => {
      this.bannerList = bannersResponse;
    }, error => {
      console.log('error occured', error);
    });
  }
}
