// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


interface LoginResponse {
  id: number;
  username: string;
  email: string;
  accessToken: string;
  refreshToken: string;
}
interface UserProfile {
  username: string;
  email?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  
  constructor(private http: HttpClient) {}


  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `https://dummyjson.com/auth/login`,
      { username, password },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }

userProfile():Observable<UserProfile> {
  const accessToken = localStorage.getItem('accessToken');

  return this.http.get<UserProfile>(
    `https://dummyjson.com/auth/me`,
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      })
    }
  );
}

  register(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `https://dummyjson.com/auth/login`,
      { username, password },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
    );
  }
   
}