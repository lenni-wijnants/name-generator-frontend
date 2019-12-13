import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from './components/form/form.component';
import {ConfirmationComponent} from './components/confirmation/confirmation.component';
import {WallComponent} from './components/wall/wall.component';


const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'wall', component: WallComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
