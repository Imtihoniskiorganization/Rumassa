import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from '../../models/delivery';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  
  baseUrl: string = "https://localhost:7245/api/Delivery/Create";

  constructor(private http: HttpClient) { }

  createDelivery(data: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(this.baseUrl, data);
  }
}
