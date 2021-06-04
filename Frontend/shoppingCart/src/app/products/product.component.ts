
import { Component, OnInit } from '@angular/core';
import { ICategory } from '../shared/model/category.model';
import { IProduct } from '../shared/model/product.model';
import { ProductDataService} from '../../app/shared/services/product-data.service';
import { AppService } from '../shared/services/app.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  selectedCatagoryIndex: number;
  productCategoriesList: ICategory[] = [];
  products: IProduct[];
  filteredCategory;
  filteredProducts: IProduct[] = [];
  isErrorOccured = false;

  constructor(
    private productDataService: ProductDataService,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.productCategoriesList = this.productDataService.categoriesList;
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.appService.getProducts().subscribe(productResponse => {
      this.products = productResponse;
    }, error => {
      console.log('error occured', error);
      this.isErrorOccured = true;
    });
  }

  filterSelectedCategoryList(selectedCategoryId: string, index: number): void {
    this.selectedCatagoryIndex = index;
    this.resetFilter();
    this.productCategoriesList.forEach(category => {
      if (category.id === selectedCategoryId) {
        this.filteredCategory = category;
      }
    });
    this.filterProductsOfSelectedCatagory();
  }

  filterProductsOfSelectedCatagory(): void {
    this.products.forEach((prod: IProduct) => {
      if (prod.category === this.filteredCategory.id) {
        this.filteredProducts.push(prod);
      }
    });
  }

  resetFilter(): void {
    this.productDataService.filteredCategory = [];
    this.filteredCategory = [];
    this.filteredProducts = [];
  }
}
