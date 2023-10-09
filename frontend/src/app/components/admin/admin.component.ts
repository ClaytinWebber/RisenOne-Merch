import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  jobForm: any;
  hasLoaded = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.jobForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      location: ['', [Validators.required]],
      level: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
    console.log(this.jobForm);
    this.hasLoaded = true;
  }

  submit() {
    const data = {
      title: this.jobForm.get('title').value,
      location: this.jobForm.get('location').value,
      level: this.jobForm.get('level').value,
      description: this.jobForm.get('description').value,
      companyName: 'Risen One Consulting',
    };
    this.postJob(data);
  }

  postJob(jobData: any) {
    this.apiService.addJob(jobData).subscribe({
      next: () => {
        window.location.reload();
        this.router.navigate(['/home']);
      },
      error: () => {
        console.log('ERROR');
      },
    });
  }
}
