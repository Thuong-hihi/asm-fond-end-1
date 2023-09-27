import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  API_URL = 'http://localhost:3001/product'

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}`);
  }
  getById(id: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/` + id);
  }
  createP(product: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/add`, product);
  }
  updateP(product: any, id: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/update/` + id, product);
  }
  deleteP(id: any): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/delete/` + id);
  }
}
