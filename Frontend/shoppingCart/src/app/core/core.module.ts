import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CartComponent } from './cart/cart/cart.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        MatIconModule,
        NgxSkeletonLoaderModule,

    ],
    declarations: [HeaderComponent, NotFoundComponent, LoginComponent, RegisterComponent, CartComponent],
    exports: [
        RouterModule,
        HeaderComponent,
    ],
    providers: [
    ],
    bootstrap: [HeaderComponent]

})
export class CoreModule { }
