import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(ch: string): any {
    let voyelles = ['a', 'e', 'i', 'u', 'o', 'y'];
    let result = '';
    for (let i = 0; i < ch.length; i++) {
      let inter = ch[i];
      for (let j = 0; j < voyelles.length; j++) {
        if (ch[i].toLowerCase() == voyelles[j]) {
          inter = "*"
          break;
        }


      }
      result += inter;

    }
    return result;

  }


}
