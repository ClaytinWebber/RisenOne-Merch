import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { JobDetailModalComponent } from './components/job-board/job-detail-modal/job-detail-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { JobBoardComponent } from './components/job-board/job-board.component';
import { BuymerchComponent } from './components/buymerch/buymerch';
import { SubmitComponent } from './components/submit/submit';
import { NavComponent } from './components/navbar/navbar';
import { AddMerchComponent } from './components/addmerch/addmerch';

@NgModule({
  declarations: [
    AppComponent,
    JobBoardComponent,
    JobDetailModalComponent,
    BuymerchComponent,
    AddMerchComponent,
    NavComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
