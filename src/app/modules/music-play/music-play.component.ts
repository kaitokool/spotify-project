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
  timerTestLeft: any = '00:00';
  timerTestRight: any = '00:00';
  currentTime: any;
  timeTick: any = 0;
  durationUpdater: any;
  progress: any;
  seek: any;
  multipleMusicPlay: any;
  timeOut:any;
  animationPause:any = true;

  constructor() {}

  sound: any;

  async ngOnInit() {
    this.sound = new Howl({
      src: [
        'https://www.mboxdrive.com/AmThanh-Dong-ho-dem-nguoc-30s.mp3'
      ],
      html5: true,
      preload:true,
      onplay: () => {
        this.playerState = false;
        this.animationPause = false;
        this.durationUpdater = setInterval(() => {
          this.UpdateTime(this.sound);
          this.step(this.sound);
        }, 10);
      },
      onpause: () => {
        this.animationPause = true;
      },
      onend: () => {
        this.playerState = true;
        this.animationPause = true;
        clearInterval(this.timerTestLeft);
        this.playNextMusic();
      },
    });
  }

  playNextMusic(){
    this.sound.stop();
    this.sound = new Howl(
      {
        src: 'http://vnso-zn-16-tf-mp3-s1-zmp3.zadn.vn/eebb7f691d28f476ad39/5828366249961897055?authen=exp=1647509090~acl=/eebb7f691d28f476ad39/*~hmac=a136f3ac6295c88a38a6c7348ce88a5d',
        html5: true,
        preload:true,
        onplay: () => {
          this.playerState = false;
          this.animationPause = false;
          this.durationUpdater = setInterval(() => {
            this.UpdateTime(this.sound);
            this.step(this.sound);
          }, 10);
        },
        onpause: () => {
          this.animationPause = true;
        },
        onend: () => {
          this.playerState = true;
          this.animationPause = true;
          clearInterval(this.timerTestLeft);
        },
      }
    );
    this.sound.play();
  }

  playPrevMusic(){
    this.sound.stop();
    this.sound = new Howl(
      {
        src: 'https://www.mboxdrive.com/AmThanh-Dong-ho-dem-nguoc-30s.mp3',
        html5: true,
        preload:true,
        onplay: () => {
          this.playerState = false;
          this.animationPause = false;
          this.durationUpdater = setInterval(() => {
            this.UpdateTime(this.sound);
            this.step(this.sound);
          }, 10);
        },
        onpause: () => {
          this.animationPause = true;
        },
        onend: () => {
          this.playerState = true;
          this.animationPause = true;
          clearInterval(this.timerTestLeft);
        },
      }
    );
    this.sound.play();
  }

  UpdateTime(x: any) {
    let a = x.seek().toFixed();
    let a2 = Math.floor(a / 60);
    let a1 = a - a2 * 60;
    let b = x.duration().toFixed();
    let b2 = Math.floor(b / 60);
    let b1 = b - b2 * 60;
    this.timerTestLeft = a2 + ':' + a1;
    this.timerTestRight = b2 + ':' + b1;
  }

  step(x: any) {
    this.progress = document.getElementById('progress');
    this.seek = x.seek() || 0;
    this.progress.style.width = ((this.seek / x.duration()) * 100 || 0) + '%';
  }

  play() {
    if (this.playerState) {
      this.playerState = false;
      this.sound.play();
    }
  }

  pause() {
    if (!this.playerState) {
      this.playerState = true;
      this.sound.pause();
    }
  }

  prev(){
    this.playPrevMusic();
  }

  next(){
    this.playNextMusic();
  }
}
