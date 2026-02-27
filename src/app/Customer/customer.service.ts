import { HttpClient} from '@angular/common/http';
import { Injectable,} from '@angular/core';
import { map, Observable } from 'rxjs';

// interface CustomerResponse {
//   id: number;
//   firstName: string;
//   lastName: string;
//   image:string;
//   address: [];
//   company: [];
// }

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

constructor(private http:HttpClient) { }  



customerList(): Observable<any[]> {
  return this.http.get<any>(`https://dummyjson.com/users`).pipe(
    map(res => res.users)
  );
}
}

