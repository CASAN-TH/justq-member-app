import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment'
})
export class MomentPipe implements PipeTransform {

  transform(date, index): any {
    return moment(date).locale('th').add(index, 'days').format('DD MMMM YYYY');
  }

}
