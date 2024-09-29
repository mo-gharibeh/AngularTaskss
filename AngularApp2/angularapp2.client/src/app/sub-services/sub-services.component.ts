import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlService } from '../URL/url.service';

@Component({
  selector: 'app-sub-services',
  templateUrl: './sub-services.component.html',
  styleUrl: './sub-services.component.css'
})
export class SubServicesComponent {
  parameter: any
  servicesArray: any
  ngOnInit() {
    this.parameter = this._route.snapshot.paramMap.get("id");
    this.getsubServices(this.parameter);
  }
  subServiceData: any
  constructor(private _ser: UrlService, private _route: ActivatedRoute) { }
  getsubServices(id: any) {
    this._ser.getSubServices(id).subscribe((data) => {
      this.subServiceData = data
      console.log("this.subServiceData", this.subServiceData)
    })
  }

}
