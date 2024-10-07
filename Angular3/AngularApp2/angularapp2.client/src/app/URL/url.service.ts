import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private http: HttpClient) { }

  email: BehaviorSubject<string> = new BehaviorSubject<string>("");

  emailAddress = this.email.asObservable();






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
    return this.http.put(`${this.staticData}/Services/UpdateServicesDetails/${id}`, data)
 
  }

  getAllProduct(): Observable<any> {
    return this.http.get(`${this.staticData}/ProductC/GetProducts`) 
  }



  incQuantity(id: any) {

    var product = this.cartItem.find((c: any) => c.productId == id)
    if (product) {
      product.quantity++;
      this.cartItemSubject.next(this.cartItem);
    }
  }
  decQuantity(id: any) {


    var product = this.cartItem.find((c: any) => c.productId == id)
    if (product) {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        this.cartItem = this.cartItem.filter((c: any) => c.productId != id);
      }
      this.cartItemSubject.next(this.cartItem);
    }
}


  cartItem: any = [];
  cartItemSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.cartItem);
  cartItemOber = this.cartItemSubject.asObservable();/// ناخذ منه الداتا
  addToCart(product: any) {

    var record = this.cartItem.find((c: any) => c.productId == product.productId)
    if (record) {
      alert("Product already added")
      //record.quantity++;
    } else {
      this.cartItem.push(product);
      this.cartItemSubject.next(this.cartItem);
    }
  }
}
