import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: String = 'Product List';
  imageWidth = 50;
  showImage = false;
  _listFilter = 'cart';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(v: string) {
    this._listFilter = v;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    {
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.9532151,
      'starRating': 3.2,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    },
  ];
  constructor() {
    this.filteredProducts = this.products;
    this.listFilter = 'cart';
  }
  ngOnInit() {
    console.log('In OnInit');
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
