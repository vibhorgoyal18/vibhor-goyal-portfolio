import {Component, OnInit} from '@angular/core';
import {TimeDifference} from '../../services/time-difference';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  experience: any;

  constructor(private timeDiffSvc: TimeDifference) {
  }

  ngOnInit() {
    this.experience = this.timeDiffSvc.getExperience();
  }
}
