import { ITable } from './../interfaces/itable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private url = '../../assets/folder.json';
  private url2 = '../../assets/document.json';
  private url3 = '../../assets/invoice.json';
  constructor(private http: HttpClient) {}

  getUrl(): Observable<ITable[]> {
    return this.http.get<ITable[]>(this.url);
  }
  getUrl2(): Observable<ITable[]> {
    return this.http.get<ITable[]>(this.url2);
  }
  getUrl3(): Observable<ITable[]> {
    return this.http.get<ITable[]>(this.url3);
  }
}
