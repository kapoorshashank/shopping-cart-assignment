
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from '../shared/model/category.model';
import { IProduct } from '../shared/model/product.model';
import { HttpService } from '../shared/services/http.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  selectedCatagoryIndex: number;
  productCategoriesList: ICategory[] = [];
  products: IProduct[];
  initialProducts: IProduct[];
  filteredCategory;
  filteredProducts: IProduct[] = [];
  isErrorOccured = false;
  categoryId: any;
  categories: ICategory[] = [];
  categoryList: ICategory[];
  selectedCategory: string;
  @ViewChild('div') switchSpanElement:ElementRef;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    // Component initialisation
    // Extract value of category ID from route params
    this.route.params.subscribe((params: Params) => {
      
      this.categoryId = params.id;
      this.selectedCatagoryIndex = Number(params.order) - 1;
    });
    // to fetch Product and categories data
    this.getAllProducts();
    this.fetchCategories();
  }

  // Function to fetch Categories data - Beverages, Bakery Cakes etc
  fetchCategories(): void {
    this.httpService.getCategories().subscribe((categoriesResponse: ICategory[]) => {
      categoriesResponse.forEach((category) => {

        if (category.enabled) {
          this.categories.push(category);
        }
      });
      this.categories = this.categories.sort((a, b) => {
        return a.order - b.order;
      });
    }, error => {
      console.log('error occured', error);
    });
  }
/**
 * Function to fetch Products data
 */
  getAllProducts(): void {
    this.httpService.getProducts().subscribe(data => {
      this.products = data;
      this.initialProducts = [...data];
      if (this.categoryId) {
        this.getFilteredList(data);
      }
    }, error => {
      console.log('error occured', error);
      this.isErrorOccured = true;
    });
  }

// Function to fetch Product data on the basis of filter
  getFilteredList(products: IProduct[]) {
    const prod = [];
    if (products.length > 0) {
      products.forEach((product) => {
        if (product.category === this.categoryId) {
          prod.push(product);
        }
      });
      this.products = prod;
    }
  }

// Function to get the filtered category
  filterSelectedCategoryList(selectedCategoryId: string, index: number): void {
    if(this.selectedCatagoryIndex===index){
      
      this.filteredProducts = this.initialProducts;
      this.selectedCatagoryIndex = null; 
    }
    else{
    this.selectedCatagoryIndex = index;
    this.resetFilter();
    this.categories.forEach(category => {
      if (category.id === selectedCategoryId) {
        this.filteredCategory = category;
      }
    });
    this.filterProductsOfSelectedCatagory();
  }
  }

// Function to get the product data on the basis of selected category id
  filterProductsOfSelectedCatagory(): void {
    this.initialProducts.forEach((prod: IProduct) => {
      if (prod.category === this.filteredCategory.id) {
        this.filteredProducts.push(prod);
      }
    });
  }

// To reset filter
  resetFilter(): void {
    this.filteredCategory = [];
    this.filteredProducts = [];
  }

  // dropdown change - mobile devices specific behavior
onDropdownChange(eventTarget: any) {

  this.selectedCategory = '';
  if (this.selectedCategory === eventTarget.value || eventTarget.value === 'all') {
    this.selectedCategory = '';
  } else {
    this.selectedCategory = eventTarget.value;
  }
  this.filterSelectedCategoryList(this.selectedCategory, 0);
}
}

