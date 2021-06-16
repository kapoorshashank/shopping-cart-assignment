import { Component, HostListener, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { CartComponent } from '../cart/cart/cart.component';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { CartService} from '../../shared/services/cart.service';
import { BreakpointObserver} from '@angular/cdk/layout';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  screenWidth: number;
  dialogConfig: MatDialogConfig;
  cartValue: Subject<number>;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.screenWidth = window.innerWidth;
  }
  constructor(
    private cartService: CartService,
    private dialog: MatDialog,
    private router: Router,
  ) {
 
  }

  ngOnInit(): void {
    
    this.cartValue = this.cartService.getTotalCartItems();
    console.log(this.cartValue);
    this.getScreenSize();

  }

  navigate(param: string) {
    this.router.navigate([param]);
  }

  openCart() {
    
    if (this.screenWidth > 992) {
      
      this.openCartDialog();
    } else {
      
      this.router.navigate(['/cart']);

    }
  }
  openCartDialog() {
    this.dialogConfig = {width: '480px', position: { right: '10%', top : '100px' }};
    this.dialog.open(CartComponent, this.dialogConfig);
  }
}
