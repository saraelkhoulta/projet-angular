import { Component, OnInit, Input } from '@angular/core';
import { ParseSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit {

@Input() songPlayer;
  constructor() { }

  ngOnInit(){}
 

    play(){
      console.log('play'+ this.songPlayer);
    }
    pause(){
      console.log('pause'+ this.songPlayer);
    }
  

}
