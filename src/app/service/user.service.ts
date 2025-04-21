import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface User {
  id?: number;
  name: string;
  // Add other user properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://azurespringapp-cyasa8hkh0h9huhj.germanywestcentral-01.azurewebsites.net/'; // Update with your backend URL

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/addUser`, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/getAllUsers`);
  }
}