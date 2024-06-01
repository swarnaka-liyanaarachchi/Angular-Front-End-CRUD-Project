import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from './inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private baseURL = "http://localhost:8080/inventory";
  constructor(private httpClient: HttpClient) { }

  getInventoryList(): Observable<Inventory[]>{
    return this.httpClient.get<Inventory[]>(`${this.baseURL}`);
  }

  CreateInventory(inventory: Inventory): Observable<object>{
    return this.httpClient.post(`${this.baseURL}`, inventory);
  }


  getInventoryById(id: string): Observable<Inventory> {
    return this.httpClient.get<Inventory>(`${this.baseURL}/${id}`);
  }
  
  
  updateInventory(id: string, inventory: Inventory): Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, inventory);
  }

  deleteInventory(id: string): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }




  getInventoryByItemId(itemId: string): Observable<Inventory[]> {
    return this.httpClient.get<Inventory[]>(`${this.baseURL}/item/${itemId}`);
  }
}
