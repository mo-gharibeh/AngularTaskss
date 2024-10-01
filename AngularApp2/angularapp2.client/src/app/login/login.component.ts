import { Component } from '@angular/core';
import { UrlService } from '../URL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  ngOnInit() {

  }

  constructor(private _ser: UrlService, private _router: Router) {

  }

  loginNewUser(data: any) {
    
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.loginUser(form).subscribe(() => {
      alert("user loggedin  successfully")
      this._router.navigate(['/services']);
    },
      (error) => {
        alert(error.error)
      }
    )
  }
}
