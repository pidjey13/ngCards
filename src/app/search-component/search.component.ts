import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../interface/product';
import { DataService } from '../service/data.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // products: Product[] = [];
  // allProducts: Product[] = [];


  // ===========  soluzione proposta da ToH  =========== //
  products$!: Observable<Product[]>;
  private searchTerms = new Subject<string>();
  // ===========  soluzione proposta da ToH  =========== //


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.getProducts();

    // =========== soluzione proposta da ToH, legata a searchProduct() =========== //
    this.products$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.dataService.searchProduct(term)),
    );
    // ===========  soluzione proposta da ToH  =========== //
  }


  // ===========  soluzione proposta da ToH  =========== //
  search(term: string): void {
    this.searchTerms.next(term);
  }
  // ===========  soluzione proposta da ToH  =========== //


  // getProducts(): void {
  //   this.dataService.getProducts()
  //     .subscribe((data: Product[]) => {
  //       this.products = data;
  //       this.allProducts = this.products;
  //       console.log("this.allProducts: ", this.allProducts)
  //     });
  // }

  // search(value: string): void {
  //   this.products = this.allProducts.filter((val) => val.title.toLowerCase().includes(value));
  // }
}
