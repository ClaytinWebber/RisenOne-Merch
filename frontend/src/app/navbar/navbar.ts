import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blackBarOpen = false;

  openBlackBar() {
    this.blackBarOpen = true;
  }

  closeBlackBar() {
    this.blackBarOpen = false;
  }
}