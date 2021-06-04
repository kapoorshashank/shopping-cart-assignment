import { ICartResponse } from '../model/cart.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBanner } from '../model/banner.model';
import { IProduct } from '../model/product.model';
import { ICategory } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl = 'http://localhost:5000';
  initialCart: any;
  finalCart: any[];
  subject$: any;
  cartItems$: any;

  constructor(private http: HttpClient) { }

  getBanners(): Observable<IBanner[]> {
    console.log('Ni hao from App Serivce');
    const bannerUrl = `${this.baseUrl}/banners`;
    return this.http.get<IBanner[]>(bannerUrl);
  }

  getCatagories(): Observable<ICategory[]> {
    console.log('Ni hao from geT Categories');
    const categoriesUrl = `${this.baseUrl}/categories`;
    return this.http.get<ICategory[]>(categoriesUrl);
  }

  getProducts(): Observable<IProduct[]> {
    const productsUrl = `${this.baseUrl}/products`;
    return this.http.get<IProduct[]>(productsUrl);
  }

  postProductToCart(productId: string): Observable<ICartResponse> {
    const addToCartUrl = `${this.baseUrl}/addToCart`;
    return this.http.post<ICartResponse>(addToCartUrl, productId);
  }

}
