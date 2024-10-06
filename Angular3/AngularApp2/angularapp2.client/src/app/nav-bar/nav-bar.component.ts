import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private _ser: UrlService) { }

  email: any;
  ngOnInit() {
    this._ser.emailAddress.subscribe(data => this.email = data)


  }
}
