import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlocksComponent } from './blocks/blocks.component';
import { NumbersComponent } from './numbers/numbers.component';
import { PhoneComponent } from './phone/phone.component';


const routes: Routes = [
  { path: 'number', component: NumbersComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'block', component: BlocksComponent },
  { path: '', component: NumbersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
