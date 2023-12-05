import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { SubmitComponent } from 'src/app/components/buymerch/submit/submit';

@Component({
  selector: 'app-buymerch',
  templateUrl: './buymerch.html',
  styleUrls: ['./buymerch.scss']
})

export class BuymerchComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  user = {
    name: 'John Doe',
    pointsRemaining: 100,
    totalRedeemed: 0,
    itemsSelected: 0,
    totalPoints: 0,
  };

  merchandiseItems = [
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

  showSubmitOrderPopup = false;
  totalPoints = 0;

  openSubmitModal() {
    console.log('MODAL OPENED ');
    const dialogRef = this.dialog.open(SubmitComponent, {
      width: '80vw',
      data: {
        title: 'Submit Order'
      },
    });
  }

  ngOnInit(): void {
    this.calculateTotalPoints();
  }

  submitOrder() { 
    this.showSubmitOrderPopup = true;
  }

  closeSubmitOrderPopup() {
    this.showSubmitOrderPopup = false;
  }

  calculateTotalPoints() {
    this.totalPoints = 0;
    for (const item of this.merchandiseItems) {
      this.totalPoints += item.points;
    }
  }
}