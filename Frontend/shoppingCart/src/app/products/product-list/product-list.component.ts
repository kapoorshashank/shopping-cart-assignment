
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/model/product.model';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: IProduct[];
  @Input() filteredProducts: IProduct[];
  displayProducts: IProduct[];
  selectedProductIndexes = [];
  isErrorOccured = false;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
  }
// To do : Product list in Progress, Cart data to be fetched


  // ngOnChanges(simpleChanges): void {
  //   if (this.filteredProducts && !this.filteredProducts.length) {
  //     this.displayProducts = this.products;
  //   } else {
  //     this.displayProducts = this.filteredProducts;
  //   }
  // }

  // addProductToCart(product: IProduct): void {
  //   this.highlightSelectedProducts(product);
  //   this.appService.postProductToCart(product.id).subscribe(data => {
  //     if (data && data.response === 'Success') {
  //       this.appService.addProductToCart(product);
  //     }
  //   }, error => {
  //     console.log('error occured', error);
  //     this.isErrorOccured = true;
  //   });
  // }

  // highlightSelectedProducts(selectedProduct: IProduct): void {
  //   if (this.selectedProductIndexes.indexOf(selectedProduct) === -1) {
  //     this.selectedProductIndexes.push(selectedProduct);
  //   }
  // }
}
