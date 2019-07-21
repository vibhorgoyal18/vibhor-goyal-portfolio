import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TimeDifference} from '../../services/time-difference';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  experience: any;

  constructor(private timeDiffSvc: TimeDifference) {
  }

  ngOnInit() {
    this.experience = this.timeDiffSvc.getExperience();
  }

  public getClipPath(element: HTMLElement): string {
    const offsetY = element.offsetTop + (element.offsetHeight / 2);
    const offsetX = element.offsetLeft + element.offsetWidth - 20;
    return 'circle(7px at ' + offsetX + 'px ' + offsetY + 'px)';
  }

  public getIConPositionLeft(element: HTMLElement): string {
    const offsetX = element.offsetLeft + element.offsetWidth - 21;
    console.log(offsetX);
    return offsetX + 'px';
  }

  public getIConPositionTop(element: HTMLElement): string {
    const offsetY = element.offsetTop + (element.offsetHeight / 2) - 8;
    console.log(offsetY);
    return offsetY + 'px';
  }

}
