import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductInterface } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API_URL: string = 'https://mystoreapi.com';
  constructor(private _httpClient: HttpClient) { }

  getPorduct(): Observable<ProductInterface[]> {
    return this._httpClient.get<ProductInterface[]>(`${this.API_URL}/catalog/categories`);
  }
  }
