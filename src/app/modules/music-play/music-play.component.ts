import { Component, OnInit } from '@angular/core';
import { Howl, Howler } from 'howler';
import { timer } from 'rxjs';

@Component({
  selector: 'app-music-play',
  templateUrl: './music-play.component.html',
  styleUrls: ['./music-play.component.css'],
})
export class MusicPlayComponent implements OnInit {
  playerState: any = true;
  timerTest: any;
  currentTime: any;
  timeTick: any = 0;
  durationUpdater: any;
  progress: any;
  seek: any;

  constructor() {}

  sound: any;

  async ngOnInit() {
    this.sound = new Howl({
      src: [
        'https://www.mboxdrive.com/AmThanh-Dong-ho-dem-nguoc-30s.mp3',
        'http://vnso-zn-16-tf-mp3-s1-zmp3.zadn.vn/eebb7f691d28f476ad39/5828366249961897055?authen=exp=1647509090~acl=/eebb7f691d28f476ad39/*~hmac=a136f3ac6295c88a38a6c7348ce88a5d',
      ],
      html5: true,
      autoplay: false,
      loop: false,
      onplay: () => {
        this.durationUpdater = setInterval(() => {
          this.UpdateTime(this.sound);
          this.step(this.sound);
        }, 50);
        console.log(`play`);
      },
      onpause: () => {
        console.log(`pause`);
      },
      onend: () => {
        clearInterval(this.timerTest);
        this.playerState = true;
        this.sound.skip('next');
        console.log(`end`);
      },
    });
  }

  UpdateTime(x: any) {
    let a = x.seek().toFixed();
    let a2 = Math.floor(a / 60);
    let a1 = a - a2 * 60;
    let b = x.duration().toFixed();
    let b2 = Math.floor(b / 60);
    let b1 = b - b2 * 60;
    this.timerTest = a2 + ':' + a1 + ' / ' + b2 + ':' + b1;
  }

  step(x: any) {
    this.progress = document.getElementById('progress');
    this.seek = x.seek() || 0;
    this.progress.style.width = ((this.seek / x.duration()) * 100 || 0) + '%';
  }

  play() {
    if (this.playerState) {
      this.sound.play();
      this.playerState = false;
    }
  }

  pause() {
    if (!this.playerState) {
      this.sound.pause();
      this.playerState = true;
    }
  }

  prev(){
    this.sound.skip('prev');
  }

  next(){
    console.log(this.sound);
    this.sound.skip('next');
  }
}
