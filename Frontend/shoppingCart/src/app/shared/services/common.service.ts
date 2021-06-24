import { CartResponse } from '../model/cart.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner.model';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { baseUrl } from '../constant';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getBanners(): Observable<Banner[]> {
    const bannerUrl = `${baseUrl}/banners`;
    return this.http.get<Banner[]>(bannerUrl);
  }

  getCategories(): Observable<Category[]> {
    const categoriesUrl = `${baseUrl}/categories`;
    return this.http.get<Category[]>(categoriesUrl);
  }

  getProducts(): Observable<Product[]> {
    const productsUrl = `${baseUrl}/products`;
    return this.http.get<Product[]>(productsUrl);
  }

  postProductToCart(productId: string): Observable<CartResponse> {
    const addToCartUrl = `${baseUrl}/addToCart`;
    return this.http.post<CartResponse>(addToCartUrl, productId);
  }

}
