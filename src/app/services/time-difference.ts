import {Injectable} from '@angular/core';

@Injectable()
export class TimeDifference {

  getExperience() {
    const startDate = new Date('2016-01-18T00:00:00');
    const currentDate = new Date();
    let months = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += currentDate.getMonth();
    const experienceYears = (Math.floor(months / 12));
    const experienceMonths = months % 12;
    if (experienceYears === 0) {
      return (experienceMonths === 1 ? experienceMonths + ' month' : experienceMonths + ' month');
    } else if (experienceMonths === 0) {
      return experienceYears === 1 ? experienceYears + ' year' : experienceYears + ' years';
    } else {
      return (
        (Math.floor(months / 12) === 0 ? '' : (Math.floor(months / 12) + ' Years and ')) +
        (months % 12 !== 0 ? (months % 12) + ' months' : '')
      );
    }
  }

  getTimeDifference(startDate: string, endDate: string) {
    const dateStart = new Date(startDate);
    const dateEnd = new Date(endDate);
    let months = (dateEnd.getFullYear() - dateStart.getFullYear()) * 12;
    months -= dateStart.getMonth();
    months += dateEnd.getMonth();
    const experienceYears = (Math.floor(months / 12));
    const experienceMonths = months % 12;
    if (experienceYears === 0) {
      return (experienceMonths === 1 ? experienceMonths + ' month' : experienceMonths + ' month');
    } else if (experienceMonths === 0) {
      return experienceYears === 1 ? experienceYears + ' year' : experienceYears + ' years';
    } else {
      return (
        (Math.floor(months / 12) === 0 ? '' : (Math.floor(months / 12) + ' Years and ')) +
        (months % 12 !== 0 ? (months % 12) + ' months' : '')
      );
    }
  }
}
