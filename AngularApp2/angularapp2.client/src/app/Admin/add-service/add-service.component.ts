import { Component } from '@angular/core';
import { UrlService } from '../../URL/url.service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrl: './add-service.component.css'
})
export class AddServiceComponent {

  ngOnInit() {

  }

  constructor(private _ser: UrlService) { }



  image: any

  changeImage(event: any) {
    this.image = event.target.files[0]
  }



  addNewService(data: any) {

    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }


    form.append("ServiceImage", this.image)
    this._ser.addService(form).subscribe(() =>

      alert("Service Added")


    )



  }

}
