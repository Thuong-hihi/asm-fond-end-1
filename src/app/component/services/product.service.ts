import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_URL = ``; // lấy dữ liệu từ api
  constructor(private http: HttpClient) { }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API_URL)
  }
  getProductById(id: number): Observable<IProduct> {
    // Sử dụng HttpClient để gửi yêu cầu GET đến API để lấy sản phẩm theo ID
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_URL}`, product)
  }
  editProduct(product: IProduct): Observable<IProduct> {
    return this.http.patch<IProduct>(`${this.API_URL}/${product.id}`, product)
  }
  removeProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  }
  // Các phương thức khác cho việc sửa, xóa sản phẩm, và lấy sản phẩm theo ID
}
