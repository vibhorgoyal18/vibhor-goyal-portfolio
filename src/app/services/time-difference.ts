import {Injectable} from '@angular/core';

@Injectable()
export class TimeDifference {

  getExperience() {
    const startDate = new Date('2016-01-18T00:00:00');
    const currentDate = new Date();
    let months = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth() + 1;
    months += currentDate.getMonth();
    return (Math.floor(months / 12) + ' Years' + (months % 12 !== 0 ? ' and ' + (months % 12) + ' months' : ''));
  }
}
