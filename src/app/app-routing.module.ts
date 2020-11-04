import { UserComponent } from './component/user/user.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { BooksComponent } from './component/books/books.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: 'users', component: UserComponent},
  { path: 'books', component: BooksComponent},
  { path: 'checkouts', component: CheckoutComponent},
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
