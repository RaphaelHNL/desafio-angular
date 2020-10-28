import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ytvideo',
  templateUrl: './ytvideo.component.html',
  styleUrls: ['./ytvideo.component.css']
})
export class YtvideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag); 
  }

}
