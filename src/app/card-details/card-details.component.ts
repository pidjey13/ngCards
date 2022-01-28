import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product';
import { Location } from '@angular/common'
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  product?: Product;

  constructor(private dataService: DataService, private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {   // mi restituisce un oggetto coi parametri dell html
      this.dataService.getProduct(params.id)  // mi restituisce le info del singolo prodotto
        .subscribe(result => {
          this.product = result;
        });
    })
  }

  goBack(): void {
    this.location.back();
  }
}
