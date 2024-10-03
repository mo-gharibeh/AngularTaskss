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


  getSigleSubServices(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubServices/GetSubServicesById/${id}`)
  }


  grtSubscription(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subscribtion/GetSubscribtion`)
  }

  addUserSubscription(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/UserSubscription`, data)
  }


  addUser(data: any): Observable<any> {
    return this.http.post(`https://localhost:7215/api/User`, data)
  }

  loginUser(data: any): Observable<any> {
    return this.http.post(`https://localhost:7215/api/User/login`, data)
  }

  addService(data: any): Observable<any> {
    return this.http.post(`${this.staticData}/Services/AddService`, data)

  }
  editService(id: any, data: any): Observable<any> {
    return this.http.put(`${this.staticData }/Services/UpdateServicesDetails/${id}`, data)
 
  }
}
