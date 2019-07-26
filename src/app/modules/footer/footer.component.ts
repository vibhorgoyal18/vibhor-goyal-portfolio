import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  latitude = 28.5769245;
  longitude = 77.391029;

  constructor() {
  }

  ngOnInit() {
  }

}
