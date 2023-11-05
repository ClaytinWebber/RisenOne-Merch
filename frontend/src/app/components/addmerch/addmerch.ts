import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-merchant',
  templateUrl: './addmerch.html',
  styleUrls: ['./addmerch.scss']
})
export class AddMerchComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}