import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'dataFilterEmpleados'
})
export class DataFilterEmpleadosPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return _.filter(array, row => (row.idEmpleados).toLowerCase().indexOf(query) > -1);
    }
    return array;
  }

}
