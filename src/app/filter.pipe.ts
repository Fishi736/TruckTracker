import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {
    return value.filter(function (search) {
      return search.truckNumber.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    })
  }
}
