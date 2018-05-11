import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';


const firebaseConfig = {
  apiKey: 'AIzaSyBBm1sCHwI-WtQzt3ehhU3hmBlFrb4bl1U',
  authDomain: 'polipool-7b7f6.firebaseapp.com',
  databaseURL: 'https://polipool-7b7f6.firebaseio.com',
  projectId: 'polipool-7b7f6',
  storageBucket: 'polipool-7b7f6.appspot.com',
  messagingSenderId: '736372765797'
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'login'}
    ], { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent, HomeComponent, LoginComponent]
})
export class AppModule {}
