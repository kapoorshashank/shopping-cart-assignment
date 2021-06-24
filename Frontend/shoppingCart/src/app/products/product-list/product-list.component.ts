
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/model/product.model';
import { CartService } from 'src/app/shared/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: IProduct[];
  @Input() filteredProducts: IProduct[];
  public displayProducts: IProduct[];
  private productDetails: IProduct;
  public selectedProductIndexes = [];
  public isErrorOccured:boolean;
  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar,
  
  ) {
    this.isErrorOccured = false;
   }

  ngOnInit(): void {
  }
// Lifecycle hook will get called whenever there is a change in filteredProduct
  ngOnChanges(): void {
    if (this.filteredProducts && !this.filteredProducts.length) {
      this.displayProducts = this.products;
    } else {
      this.displayProducts = this.filteredProducts;
    }
  }
  buyNow(productId) {
    this.productDetails = this.displayProducts.find(product => product.id === productId);
    this.cartService.updateCartItems(productId, this.productDetails.name, this.productDetails.imageURL, this.productDetails.price);
    this.snackBar.open('Item Added', 'OK', {
      duration: 2000,
      panelClass: ['snack-bar--color']
    });
  }
}
