import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interface/product';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  products: Product[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.dataService.getProducts()
    .subscribe(products => this.products = products);
  }
}
