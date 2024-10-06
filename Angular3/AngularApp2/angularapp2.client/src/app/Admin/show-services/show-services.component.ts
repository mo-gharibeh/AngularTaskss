import { Component } from '@angular/core';
import { UrlService } from '../../URL/url.service';

@Component({
  selector: 'app-show-services',
  templateUrl: './show-services.component.html',
  styleUrl: './show-services.component.css'
})
export class ShowServicesComponent {

  ngOnInit() {
    this.getService();
  }

  constructor(private _ser: UrlService) {

  }

  servicesArray: any
  getService() {
    this._ser.getServices().subscribe((data) => {
      this.servicesArray = data;
      console.log("Services", this.servicesArray)
    })
  }


}
