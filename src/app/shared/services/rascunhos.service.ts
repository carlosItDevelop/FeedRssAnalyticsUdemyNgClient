import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Rascunho } from '../models/rascunho.model';

@Injectable({
  providedIn: 'root',
})
export class RascunhosService {
  baseUrl: string = environment.baseUrl;

  rascunhosChange = new Subject<void>();

  constructor(private http: HttpClient) {}

  getRascunhos(): Observable<Rascunho[]> {
    return this.http.get<Rascunho[]>(`${this.baseUrl}/rascunhos`);
  }

  getRascunhoById(id: number): Observable<Rascunho> {
    return this.http.get<Rascunho>(`${this.baseUrl}/rascunhos/${id}`);
  }

  addRascunho(rascunho: Rascunho): Observable<Rascunho> {
    return this.http.post<Rascunho>(`${this.baseUrl}/rascunhos`, rascunho);
  }

  updadeRascunho(id: number, rascunho: Rascunho): Observable<Rascunho> {
    return this.http.put<Rascunho>(`${this.baseUrl}/rascunhos/${id}`, rascunho);
  }

  deleteRascunho(rascunho: Rascunho): Observable<Rascunho> {
    return this.http.delete<Rascunho>(
      `${this.baseUrl}/rascunhos/${rascunho.id}`
    );
  }
}
