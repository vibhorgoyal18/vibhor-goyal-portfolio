import {Component, OnInit} from '@angular/core';
import {TimeDifference} from '../../services/time-difference';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  durationXorlabs: string;
  durationMobileLabs: string;
  durationMydesq: string;

  constructor(private timeDiff: TimeDifference) {
  }

  ngOnInit() {
    this.durationXorlabs = this.timeDiff.getTimeDifference('2016-01-18T00:00:00', '2018-03-21T00:00:00');
    this.durationMobileLabs = this.timeDiff.getTimeDifference('2018-03-22T00:00:00', '2018-08-24T00:00:00');
    this.durationMydesq = this.timeDiff.getTimeDifference('2018-07-28T00:00:00', (new Date()).toString());
  }

}
