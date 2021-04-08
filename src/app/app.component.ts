import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import DPlayer from 'dplayer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'netlify';

  @ViewChild('dplayer') dplayer: ElementRef;

  constructor() {

  }


  ngOnInit(): void {

    // const that = this;
    // window.onload = function() {
    //   console.log(that.dplayer.nativeElement);
    // };

  }

  ngAfterViewInit(): void {
    const dp = new DPlayer({
      container: this.dplayer.nativeElement,
      video: {
        url: 'https://cdn.jsdelivr.net/gh/cn-cdn/word-of-honor@latest/01/index.m3u8',
        type: 'hls'
      }
    });

  }

}
