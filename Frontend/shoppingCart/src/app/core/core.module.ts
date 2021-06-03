import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { CarouselComponent} from './carousel/carousel.component';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        NgbModule
    ],
    declarations: [LoginComponent, HeaderComponent, NotFoundComponent, HomeComponent, CarouselComponent],
    exports: [
        RouterModule,
        HeaderComponent
    ],
    providers: [
        AuthenticationService,
        AuthGuardService
    ]
})
export class CoreModule { }
