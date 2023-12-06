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

  items: any[] = [];
  response: any[] = [];
  id = "0e100640-9480-11ee-8b7c-a16a0488533a";

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private router: Router,
    public dialog: MatDialog
  ) {}



  user = {
    name: "",
    points: "",
    total_points_redeemed: "",
    itemsSelected: "",
    totalPoints: "",
  };

  showSubmitOrderPopup = false;
  totalPoints = 0;

  getItems() {
    this.api.getItems().subscribe((res: any) => {
      console.log(res);
      this.items = res.filter((item: any) => {
        console.log(item);
        return (
          item.name.toLowerCase() &&
          item.points
        );
      });
    });
  }

  getUser() {
    this.api.getUser(this.id).subscribe((res: any) => {
      console.log(res);
      this.user.name = res.name;
      this.user.points = res.points;
      this.user.total_points_redeemed = res.points;
      this.user.itemsSelected = res.password;
    });
  };

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
    this.getItems();
    this.getUser();
  }

  submitOrder() { 
    this.showSubmitOrderPopup = true;
  }

  closeSubmitOrderPopup() {
    this.showSubmitOrderPopup = false;
  }

  calculateTotalPoints() {
    this.totalPoints = 0;
    for (const item of this.items) {
      this.totalPoints += item.points;
    }
  }
}