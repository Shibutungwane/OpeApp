import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private server = environment.URL;
  private key = environment.KEY;

  constructor(private http: HttpClient) {}

  private getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? match[2] : null;
  }

  call(
    action: 'db' | 'spreadsheet',
    rest: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: any,
    search: string = ''
  ): Observable<any> {

    const apiUrl = `${this.server}/${rest}${search}`;

    const authkey =
      this.getCookie('authkey') ??
      '';

    const clientCode = this.getCookie('clientCode');

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.key,
      'ServiceMasterKey': authkey
    });

    if (clientCode) {
      headers = headers.set('x-clientCode', clientCode);
    }

    if (action === 'db') {
      return this.http.request(method, apiUrl, {
        body: ['POST', 'PUT'].includes(method) ? body : undefined,
        headers
      }).pipe(
        catchError(err => {
          console.error('API error from server', apiUrl);
          return throwError(() => new Error('Invalid response from server'));
        })
      );
    }

    if (action === 'spreadsheet') {
      return this.http.request(method, apiUrl, {
        body,
        headers,
        responseType: 'text'
      });
    }

    return throwError(() => new Error('Invalid api action'));
  }
}