import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { forEach } from '@firebase/util';
import { RouterModule, Routes, Router } from '@angular/router';


interface User {
  collegeNumber: string;
  name: string;
}


@Component({
  selector: 'app-login1',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usersCol: AngularFirestoreCollection<User>;
  users: Observable<any[]>;
  userArray: Array<User> = [];
  subscripton: any;

  constructor (private afs: AngularFirestore,
               private router: Router) {
    afs.firestore.settings({ timestampsInSnapshots: true });
  }

  login;
  ngOnInit() {
    this.login = {
      collegeNumber: '',
      studentName: '',
    };
    this.usersCol = this.afs.collection('users');
    this.users = this.usersCol.valueChanges();
    this.subscripton = this.users.subscribe(user => {
      this.userArray = user;
    });
  }

  onClick(): void {
    console.log(this.login.studentName);
    console.log(this.login.collegeNumber);
    this.checkIfUserIndDB();
  }

  setCollegeNumber(val: string): void {
    this.login.collegeNumber = val;
  }

  setName(val: string): void {
    this.login.studentName = val;
  }

  checkIfUserIndDB(): void {
    console.log('called');
    console.log('subscribed');
    let p = 0;
    for (let index = 0; index < this.userArray.length; index++) {
      const element = this.userArray[index];
      console.log('Running');
      if (element.collegeNumber === this.login.collegeNumber) {
        this.router.navigate(['/home']);
        p = 1;
        break;
      } else {
        p = 0;
      }
    }
    if (p === 0) {
      alert('User not found in database');
    }
  }

}
