import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {element} from 'protractor';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {

  latitude = 28.5769245;
  longitude = 77.391029;
  height = '400px';
  @ViewChild('footerText', {static: false}) text: ElementRef;


  constructor(private toastrServcie: ToastrService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    if (window.innerWidth > 767) {
      this.height = this.text.nativeElement.offsetHeight + 'px';
    } else {
      this.height = '400px';
    }
  }

  copyToClipboard(item) {
    const listener = (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
    this.toastrServcie.success(`Number ${item} copied to clipboard`);
  }
}
