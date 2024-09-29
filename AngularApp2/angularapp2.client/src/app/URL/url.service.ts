import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  // بحط كل الروابط من سواقر للسيرفس
  staticData = "https://localhost:7215/api"
  urlMohammad = `${this.staticData}/Services/GetServices`;
  getServices(): Observable<any> {
    return this.http.get<any>(this.urlMohammad)
  }

  getSubServices(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesByServicesId/${id}`)
  }

}
