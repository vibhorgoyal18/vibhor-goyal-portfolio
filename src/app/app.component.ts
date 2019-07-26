import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vibhor-goyal-portfolio';

  ngOnInit(): void {
    const agent = window.navigator.userAgent.toLowerCase();
    console.log(agent);
    if (!(agent.indexOf('chrome') > -1 && !!(window as any).chrome)) {
      window.alert('The portfolio is best supported on chrome. Animations might not work properly on other browser');
    }
  }

}
