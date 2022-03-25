import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

     const filterNav:any=[];

    for(const result of value){

      if(result.name.toLowerCase().indexOf(args) > -1){
        filterNav.push(result);
      }
    }
    return filterNav;
  }

}
