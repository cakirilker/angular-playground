import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = '.././api/products/products.json';
  constructor(private httpClient: HttpClient) {

  }
  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log(`All: ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }
  handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
