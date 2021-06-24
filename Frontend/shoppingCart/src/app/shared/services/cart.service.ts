import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductDetails} from '../model/productDetails.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalItems: BehaviorSubject<number> = new BehaviorSubject(0);
  totalCost: BehaviorSubject<number> = new BehaviorSubject(0);
  cartInfo: BehaviorSubject<ProductDetails[]> = new BehaviorSubject(null);
  noOfCartItems = 0;
  productDetails: ProductDetails[] = [];
  totalPrice = 0;
  productInfo: ProductDetails;

  constructor() { }

  getTotalCartItems() {
    return this.totalItems;
  }
  getCartDetails() {
    return this.cartInfo;
  }
  getCartPrice() {
    return this.totalCost;
  }
  updateCartItems(productId, productName, productUrl, originalPrice) {

    this.noOfCartItems ++;
    this.totalPrice += originalPrice;
    this.productInfo = this.productDetails.find(product => product.productId === productId);
    (this.productInfo) ? ( this.productInfo.productValue += 1, this.productInfo.productPrice = +originalPrice * this.productInfo.productValue) : (this.productDetails.push({ productId, productName, productUrl, originalPrice, productPrice: originalPrice, productValue: 1 }));
    this.totalItems.next(this.noOfCartItems);
    this.totalCost.next(this.totalPrice);
    this.cartInfo.next(this.productDetails);

  }

  updateSingleItem(productId, flag) {

    this.productInfo = this.productDetails.find(product => product.productId === productId);
    (flag) ? (
      this.productInfo.productValue += 1,
      this.noOfCartItems += 1,
      this.productInfo.productPrice = +this.productInfo.originalPrice * this.productInfo.productValue,
      this.totalPrice += +this.productInfo.originalPrice
   ) : (
      this.productInfo.productValue -= 1,
      this.noOfCartItems -= 1,
      this.productInfo.productPrice = +this.productInfo.originalPrice * this.productInfo.productValue,
      this.totalPrice -= this.productInfo.originalPrice
   );
    if (this.productInfo.productValue === 0) {
    this.productDetails = this.productDetails.filter(product => product.productId !== productId);
  }
    this.totalItems.next(this.noOfCartItems);
    this.totalCost.next(this.totalPrice);
    this.cartInfo.next(this.productDetails);
  }
}
