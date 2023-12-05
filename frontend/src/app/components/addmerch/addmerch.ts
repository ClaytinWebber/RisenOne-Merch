import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add-merchant',
  templateUrl: './addmerch.html',
  styleUrls: ['./addmerch.scss']
})
export class AddMerchComponent implements OnInit{
  itemForm: any;
  hasLoaded = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.itemForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      points: ['', [Validators.required]],
      sizes: ['',],
      colors: ['',],
      image: ['']
    });
    console.log(this.itemForm);
    this.hasLoaded = true;
  }

  submit() {
    const data = {
      name: this.itemForm.get('name').value,
      points: this.itemForm.get('points').value,
      sizes: this.itemForm.get('sizes').value,
      colors: this.itemForm.get('colors').value,
      image: this.itemForm.get('image').value,
    };
    console.log(data);
    this.postItem(data);
  }

  postItem(itemData: any) {
    this.apiService.addItem(itemData).subscribe({
      next: () => {
        window.location.reload();
        this.router.navigate(['/buymerch']);
      },
      error: () => {
        console.log('ERROR');
      },
    });
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}