import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {IBanner} from '../../shared/model/banner.model';
import {HttpService} from '../../shared/services/http.service';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  bannerList: IBanner[];
  constructor(config: NgbCarouselConfig, private httpService: HttpService) {
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
    this.httpService.getBanners().subscribe(bannersResponse => {
      this.bannerList = bannersResponse;
    }, error => {
      console.log('error occured', error);
    });
  }
}
