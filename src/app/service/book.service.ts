import { environment } from './../../environments/environment';
import { catchError } from 'rxjs/operators';
import { Book } from './../model/book';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    console.log(this.baseUrl + '/api/v1/books');
    return this.http.get<Book[]>(this.baseUrl + '/api/v1/books')
      .pipe(catchError(this.handleError<Book[]>('getBooks', [])));
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      console.error(error);
      // report error to database or error log
      return of(result as T);
    };
  }
}
