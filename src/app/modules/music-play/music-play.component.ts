import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-music-play',
  templateUrl: './music-play.component.html',
  styleUrls: ['./music-play.component.css']
})
export class MusicPlayComponent implements OnInit {

  constructor() { }

  sound = new Howl({
    src: ['https://www.kozco.com/tech/piano2-CoolEdit.mp3'],
    html5 :true,
    autoplay: true,
    loop: true,
    onend: function() {
      console.log('Finished!');
    }
  });

  ngOnInit(): void {
  }

}
