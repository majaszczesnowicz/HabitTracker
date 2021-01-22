import { LoginPage } from './pages/login/login.page';
import { Component } from '@angular/core';

import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  loginModal: HTMLIonModalElement;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AngularFireAuth,
    private modalCtrl: ModalController,
    private router: Router
  ) {
    this.initializeApp();
  }

  onToggleColorTheme(event){
    if(event.detail.checked){
      document.body.setAttribute('color-theme', 'dark');
    }
    else{
      document.body.setAttribute('color-theme', 'light');
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();

      this.afAuth.authState.subscribe(user => {
        if (!user) {
          this.router.navigateByUrl('/login');
        }
        else {
          this.router.navigateByUrl('/home');
        }
      });
    });
  }
}


