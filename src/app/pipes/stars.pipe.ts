import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stars'
})
export class StarsPipe implements PipeTransform {

  transform(rating: number, count: number) {

    let star = '';

    // PROVA A FARE UN REFACTOR USANDO UN CICLO FOR
    switch (Math.floor(rating)) {
      case 0:
        break;
      case 1:
        star = '★';
        break;
      case 2:
        star = '★★';
        break;
      case 3:
        star = '★★★';
        break;
      case 4:
        star = '★★★★';
        break;
      case 5:
        star = '★★★★★';
        break;
    }

    return 'Rating: ' + rating + ' ' + star + ' - Count: ' + count;
  }
}
