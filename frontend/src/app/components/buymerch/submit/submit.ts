import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-buymerch',
  templateUrl: './submit.html',
  styleUrls: ['./submit.scss']
})
export class SubmitComponent implements OnInit {

  showSubmitOrderPopup = false;

  submitForm: any;
  hasLoaded = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  items = [
    {
      id: 1,
      name: 'T-shirt',
      description: 'A comfortable t-shirt with the Angular logo',
      points: 50,
      image: 'https://angular.io/assets/images/logos/angular/angular.svg'
    },
    {
      id: 2,
      name: 'Hoodie',
      description: 'A warm hoodie with the Angular logo',
      points: 100,
      image: 'https://angular.io/assets/images/logos/angular/angular.svg'
    },
    {
      id: 3,
      name: 'Mug',
      description: 'A mug with the Angular logo',
      points: 25,
      image: 'https://angular.io/assets/images/logos/angular/angular.svg'
    }
  ];

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.submitForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
    });
    console.log(this.submitForm);
    this.hasLoaded = true;
  }

  submit() {
    const data = {
      name: this.submitForm.get('name').value,
      address: this.submitForm.get('address1').value
      + " " + this.submitForm.get('address2').value
      + " " + this.submitForm.get('city').value
      + " " + this.submitForm.get('state').value
      + " " + this.submitForm.get('zip').value,
      items: this.items,
    };
    this.postOrder(data);
  }

  postOrder(submitData: any) {
    this.apiService.addOrder(submitData).subscribe({
      next: () => {
        window.location.reload();
        this.router.navigate(['/buymerch']);
      },
      error: () => {
        console.log('ERROR');
      },
    });
  }

}