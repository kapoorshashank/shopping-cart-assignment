import { ICartResponse } from '../model/cart.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBanner } from '../model/banner.model';
import { IProduct } from '../model/product.model';
import { ICategory } from '../model/category.model';
import { baseUrl } from '../../shared/constant';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBanners(): Observable<IBanner[]> {
    const bannerUrl = `${baseUrl}/banners`;
    return this.http.get<IBanner[]>(bannerUrl);
  }

  getCategories(): Observable<ICategory[]> {
    const categoriesUrl = `${baseUrl}/categories`;
    return this.http.get<ICategory[]>(categoriesUrl);
  }

  getProducts(): Observable<IProduct[]> {
    const productsUrl = `${baseUrl}/products`;
    return this.http.get<IProduct[]>(productsUrl);
  }

  postProductToCart(productId: string): Observable<ICartResponse> {
    const addToCartUrl = `${baseUrl}/addToCart`;
    return this.http.post<ICartResponse>(addToCartUrl, productId);
  }

}
