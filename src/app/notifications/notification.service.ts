import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  notification() {
    return this.http.get<any>(`https://dummyjson.com/comments?limit=10&skip=10&select=body,postId`).pipe(map((res) => res.comments));
  }
}
