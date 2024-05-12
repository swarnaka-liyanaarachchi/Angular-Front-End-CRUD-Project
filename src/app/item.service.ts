import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private baseURL = "http://localhost:8080/items"

  constructor( private httpClient: HttpClient) { }

  getItemList(): Observable<Item[]>{
    return this.httpClient.get<Item[]>(`${this.baseURL}`);
  }

  createItem( item: Item): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, item);
  }

  getItemById(id: string): Observable<Item>{
    return this.httpClient.get<Item>(`${this.baseURL}/${id}`)
  }

  updateItem(id: string, item: Item): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, item);
  }

  deleteItem(id: string): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}
