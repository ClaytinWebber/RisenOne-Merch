import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavComponent implements OnInit{
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  toggleHamburger() {
    this.isOpen = !this.isOpen;
  }
}