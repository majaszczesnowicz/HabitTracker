import { DetailPageModule } from './pages/detail/detail.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from 'src/environments/environment';
import { LoginPageModule } from './pages/login/login.module';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

import { AngularFireMessagingModule } from '@angular/fire/messaging';

<<<<<<< HEAD
//import { ServiceWorkerModule } from '@angular/service-worker';

=======
>>>>>>> 96d33656fcb532f183d54851a1e3f4987a1653e8
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    LoginPageModule,
    DetailPageModule,
<<<<<<< HEAD
    //ServiceWorkerModule.register('combined-sw.js', {
     // enabled: environment.production,
    //}),
=======
>>>>>>> 96d33656fcb532f183d54851a1e3f4987a1653e8
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    NavParams,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
