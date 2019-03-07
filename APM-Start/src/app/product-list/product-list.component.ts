import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: String = 'Product List';
  imageWidth = 50;
  showImage = false;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  _listFilter = 'cart';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(v: string) {
    this._listFilter = v;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  constructor(private productService: ProductService) {
  }
  ngOnInit() {
    this.products =  this.productService.getProducts();
    this.filteredProducts = this.products;
  }
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onRatingClicked(message: string): void {
    this.pageTitle = `Product List: ${message}`;
  }
}
