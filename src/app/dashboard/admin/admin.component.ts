import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  name!: any
 
  constructor(private router: Router) {}

  ngOnInit() {
    this.auth();
  }

  auth() {    
    if (localStorage.getItem('role') !== "admin"){
      this.router.navigate(['/login']);
    }    
    else {
      this.name=localStorage.getItem('role');
    }
  }

  
}
