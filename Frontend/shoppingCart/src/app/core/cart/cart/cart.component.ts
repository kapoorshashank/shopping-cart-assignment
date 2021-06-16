import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IProductDetails } from 'src/app/shared/model/productDetails.model';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  allCartItems: BehaviorSubject<IProductDetails[]>;
  itemPrice: BehaviorSubject<number>;
  cartNumber: number;

  constructor(private router: Router,
              private cartService: CartService,
              @Optional() private dialogRef: MatDialogRef<CartComponent>,
              @Optional() @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.allCartItems = this.cartService.getCartDetails();
    this.itemPrice = this.cartService.getCartPrice();
    this.cartService.getTotalCartItems().subscribe(val => this.cartNumber = val);
  }

  updateCart(productId, flag) {
    this.cartService.updateSingleItem(productId, flag);
  }

  goToProductPage() {
    this.router.navigate(['/product']);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
