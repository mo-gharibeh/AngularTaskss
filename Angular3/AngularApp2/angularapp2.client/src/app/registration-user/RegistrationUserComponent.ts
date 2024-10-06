import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UrlService } from "../URL/url.service";


@Component({
    selector: 'app-registration-user',
    templateUrl: './registration-user.component.html',
    styleUrl: './registration-user.component.css'
})
export class RegistrationUserComponent {


    email: any;
    ngOnInit() {

        this._ser['email'].next("null");



    }

    constructor(private _ser: UrlService, private _router: Router) {
    }

    addNewUser(data: any) {

        var form = new FormData();
        for (let key in data) {
            form.append(key, data[key]);
        }
        this._ser.addUser(form).subscribe(() => {
            alert("user added successfully");
            this._router.navigate(['/login']);
        },
            (error) => {
                alert(error.error);
            }
        );
    }

}
