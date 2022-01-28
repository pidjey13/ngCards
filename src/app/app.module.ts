import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SearchComponent } from './search-component/search.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { StarsPipe } from './pipes/stars.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchComponent,
    CardDetailsComponent,
    StarsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
