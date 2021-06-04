import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [HeaderComponent, NotFoundComponent, HomeComponent, CarouselComponent, LoginComponent, RegisterComponent],
    exports: [
        RouterModule,
        HeaderComponent,
    ],
    providers: [
    ]
})
export class CoreModule { }
