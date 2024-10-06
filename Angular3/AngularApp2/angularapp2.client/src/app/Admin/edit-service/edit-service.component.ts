import { Component } from '@angular/core';
import { UrlService } from '../../URL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrl: './edit-service.component.css'
})
export class EditServiceComponent {

  parameter: any;
  ngOnInit() {
    this.parameter = this._active.snapshot.paramMap.get('id');
  }
  image: any
  changeImage(event: any) {
    this.image = event.target.files[0];
  }
  constructor(private _ser: UrlService, private _active: ActivatedRoute) { }

  editService(data: any) {
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    form.append("ServiceImage", this.image)
    this._ser.editService(this.parameter, form).subscribe((data) => {
      alert("ok")
    })
  }
}
