import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Checkout } from '../model/checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  getCheckouts(): Observable<Checkout[]> {
    return this.http.get<Checkout[]>('/api/v1/checkouts')
      .pipe(catchError(this.handleError('getCheckout', [])));
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      // report error to database or error log
      return of(result as T);
    };
  }
}
