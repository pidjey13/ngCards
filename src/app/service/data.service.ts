import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private productsUrl = "https://fakestoreapi.com/products/";
  private _cachedProducts : Product[] = [];

  // è più corretto Product o Product[] => è per forza un array siccome ritorna più prodotti.
  // l observable è una promise e per controllarne il contenuto si usa una subscribe.
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap(products=>this._cachedProducts=products),
      // tap(products => {
      //   for (let product of products) {
      //     console.log("TAP: ", product);
      //   }
      // })
    );
  }


  // CAPISCI PERCHè SI USA LA PIPE, CHE COSA è TAP E PERCHè NELLA SEARCH USIAMO OF()
  // SUCCESSIVAMENTE FAI IN MODO CHE CARD.COMPONENT NON VISUALIZZI TUTTI I PRODUCTS, MA SOLO QUELLI FILTRATI

  // si usa la pipe per controllare e modificare i dati emessi da un Observable.
  // tap è una funzione che ritorna un Observable IDENTICO ed esegue una callback ad ogni elemento
  // banalmente è utile per fare vari check in diversi punti del codice
  // usiamo of() per emettere i valori - a lui passati come arg - in sequenza. Non cambia nulla del dato passatogli, nemmeno il tipo


  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.productsUrl + id);
    // come getProducts ma ne carica uno solo (/products/id) (non ritorna un array, ma un singolo prodotto)
  }

  // =========== soluzione proposta da ToH, legata a searchProduct() ===========
  searchProduct(term: string): Observable<Product[]> {
    return of(this._cachedProducts.filter(product=>product.title.toLowerCase().includes(term.trim().toLowerCase())));
  }
}
