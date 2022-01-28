import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'products', component: CardComponent },
  // The colon (:) in the path indicates that :id is a placeholder for a specific product id
  { path: 'products/:id', component: CardDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
