import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  latitude = -28.68352;
  longitude = -147.20785;
  mapType = 'roadmap';

  constructor() {
  }

  ngOnInit() {
  }

}
