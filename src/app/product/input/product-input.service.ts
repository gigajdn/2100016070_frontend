import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductInputService {
  private apiUrl = 'https://2100016070-backend.vercel.app/api/products';

  constructor(private http: HttpClient) {}

  createProduct(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
