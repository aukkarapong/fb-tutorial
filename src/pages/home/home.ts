import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isLoggedIn: boolean = false;
  user: any;

  constructor(public navCtrl: NavController, public fb: Facebook) {

  }

  loginAction()
  {
    this.fb.login(['public_profile', 'email'])
    .then( (res: FacebookLoginResponse) => {
      if(res.status == "connected") {
        // var fb_id = res.authResponse.userID;
        // var fb_token = res.authResponse.accessToken;

        // Get user infos from the API
        this.fb.api("/me?fields=name,email,picture", []).then((user) => {

          this.isLoggedIn = true;
          this.user = user;
          alert(this.user);

        });
      } 
      else {
        alert("An error occurred...");
      }

    })
    .catch((e) => {
      console.log('Error logging into Facebook', e);
      alert("Error logging into Facebook");
    });
}

}
