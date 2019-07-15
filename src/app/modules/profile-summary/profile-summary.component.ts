import {Component, OnInit} from '@angular/core';
import {TimeDifference} from '../../services/time-difference';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss']
})
export class ProfileSummaryComponent implements OnInit {

  experience: any;

  constructor(private timeDiffSvc: TimeDifference) {
  }

  ngOnInit() {
    this.experience = this.timeDiffSvc.getExperience();
  }
}
