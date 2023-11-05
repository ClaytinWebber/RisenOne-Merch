import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buymerch',
  templateUrl: './submit.html',
  styleUrls: ['./submit.scss']
})
export class SubmitComponent implements OnInit {

showSubmitOrderPopup = false;
merchandiseItems: any;

  constructor() { }

  ngOnInit(): void { }

  submitOrder() {
    this.showSubmitOrderPopup = true;
  }

  closeSubmitOrderPopup() {
    this.showSubmitOrderPopup = false;
  }
}