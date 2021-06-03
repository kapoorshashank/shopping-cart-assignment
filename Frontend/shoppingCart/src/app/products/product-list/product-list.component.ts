import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/model/product.model';
import { AppService } from 'src/app/shared/services/app.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  totalProducts: IProduct[] = [];
  constructor(
    private appService: AppService,
  ) { }

  ngOnInit(): void {
    this.fetchProducts();

  }

  fetchProducts() : any {
    this.appService.getProducts().subscribe((data : IProduct[]) => {
        this.products = data;
    });
  }

}
