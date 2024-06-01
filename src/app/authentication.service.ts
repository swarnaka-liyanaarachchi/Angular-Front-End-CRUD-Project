import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = 'http://localhost:8080/auth';

  constructor(private httpClient: HttpClient) { }

  login(credentials: {username: string, password: string}): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/login`, credentials);
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseURL}/register`, user);
  }
}
