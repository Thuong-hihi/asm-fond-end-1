import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class UsersService {

    constructor(private http: HttpClient) { }
  
    API_URL = 'http://localhost:3001/user'
  
    signUp(user: any): Observable<any> {
      return this.http.post<any>(`${this.API_URL}/signup`, user);
    }
    signIn(user: any): Observable<any> {
      return this.http.post<any>(`${this.API_URL}/signin`, user); // Sử dụng phương thức signIn và endpoint đúng
    }
    getAll():Observable<any>{
      return this.http.get<any>(`${this.API_URL}`);
    }
    isAuthenticated() {
      return JSON.parse(localStorage.getItem('userInfo') || '{}');
      // '{accessToken, user}'
      // '{}'
    }
    
  }
  