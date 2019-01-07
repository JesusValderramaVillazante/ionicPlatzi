import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value, args: string) {
    if(!value){
      return null;
    }
    if(!args){
      return value;
    }
    args = args.toLowerCase();
    return value.filter(function(item){
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }
}
