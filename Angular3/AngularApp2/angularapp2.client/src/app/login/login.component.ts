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
      // check if Email is @admin.com or or not
        this._ser['email'].next(data.Email);
      if (data.Email.includes("@admin.com")) {
        this._router.navigate(['/dashboard']);
      } else {
        this._router.navigate(['/services']);
      }

      // this._router.navigate(['/services']); // for testing purposes only, remove it after testing is donealert("user loggedin  successfully")
     
    },
      (error) => {
        alert(error.error)
      }
    )
  }
}
