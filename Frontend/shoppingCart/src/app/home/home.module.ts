import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../home/home/home.component'
import {CarouselComponent} from '../home/carousel/carousel.component'
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import {HomeRoutingModule} from '../home/home-routing.module';



@NgModule({
    imports: [
        CommonModule,
        NgbModule,
        NgxSkeletonLoaderModule,
        HomeRoutingModule,


    ],
    declarations: [ HomeComponent, CarouselComponent],
    exports: [
        RouterModule,
    ],
    providers: []
})
export class HomeModule { }
