import { Component } from "@angular/core";
import { UrlService } from "../URL/url.service";



@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrl: './subscription.component.css'
})
export class SubscriptionComponent {

  ngOnInit() {
    this.grtSubscription();
  }

  constructor(private _ser: UrlService) {
  }

  subscriptionArray: any
  grtSubscription() {
    this._ser.grtSubscription().subscribe(data => {
      this.subscriptionArray = data
    });
    console.log("Array", this.subscriptionArray )
  }


  data = {
    "userId": 2,
    "subscriptionId": 0,
    "subServiceId": 1
  }
  addUserSubscription(id: any) {
    this.data.subscriptionId = id;
    this._ser.addUserSubscription(this.data).subscribe(() => {
      alert("User sussesfully subscribe")
    })
  }

}
