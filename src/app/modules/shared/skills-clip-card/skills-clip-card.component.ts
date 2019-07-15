import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-skills-clip-card',
  templateUrl: './skills-clip-card.component.html',
  styleUrls: ['./skills-clip-card.component.scss']
})
export class SkillsClipCardComponent implements OnInit {

  @Input() experience: string;
  @Input() rating: string;
  @Input() clipCSS: string;
  @Input() iTop: string;
  @Input() iLeft: string;
  @Input() title: string;
  @Input() lastUsed: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

  getClipPath() {
    return this.sanitizer.bypassSecurityTrustStyle(this.clipCSS);
  }

  getIconPosition() {
    return this.sanitizer.bypassSecurityTrustStyle(`position: absolute;top: ${this.iTop};left: ${this.iLeft};`);
  }

}
