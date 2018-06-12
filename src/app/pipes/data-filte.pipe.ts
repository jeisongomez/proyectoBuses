import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'dataFilte'
})
export class DataFiltePipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return _.filter(array, row => (row.idFacturacion).toLowerCase().indexOf(query) > -1);
    }
    return array;
  }

}
