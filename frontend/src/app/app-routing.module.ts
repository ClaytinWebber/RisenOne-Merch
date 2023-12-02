import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuymerchComponent } from './components/buymerch/buymerch';
import { SubmitComponent } from './components/submit/submit';
import { AddMerchComponent } from './components/addmerch/addmerch';

const routes: Routes = [
  { path: '', redirectTo: 'buymerch', pathMatch: 'full' },
  { path: 'buymerch', component: BuymerchComponent },
  {path: 'addmerch', component: AddMerchComponent},
  //{ path: 'submit', component: SubmitComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
