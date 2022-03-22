import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listImage: any = [
    {
      'alt' : 'img1',
      'image': '/assets/images/image1.jpg',
      'left': 15,
      'opacity': 0.4,
      'transform': 'scale(1)',
      'zindex': 1
    },
    {
      'alt' : 'img2',
      'image': '/assets/images/image2.jpg',
      'left': 25,
      'opacity': 0.7,
      'transform': 'scale(1.3)',
      'zindex': 2
    },
    {
      'alt' : 'img3',
      'image': '/assets/images/image3.jpg',
      'left': 35,
      'opacity': 1,
      'transform': 'scale(1.5)',
      'zindex': 3
    },
    {
      'alt' : 'img4',
      'image': '/assets/images/image4.jpg',
      'left': 45,
      'opacity': 0.7,
      'transform': 'scale(1.3)',
      'zindex': 2
    },
    {
      'alt' : 'img5',
      'image': '/assets/images/image5.jpg',
      'left': 55,
      'opacity': 0.4,
      'transform': 'scale(1)',
      'zindex': 1
    }
  ];
  getIDNext: any = true;

  constructor(
  ) { }

  ngOnInit() {
  }

  playListImage(){
  }

  onClickNextImage(){
    this.listImage.forEach((value:any, key:any) => {
      if(value.left == 55){
        this.listImage[key].left = 15;
        this.listImage[key].opacity = 0.4;
        this.listImage[key].transform = 'scale(1)';
        this.listImage[key].zindex = 1;
      }else if(value.left == 15){
        this.listImage[key].left = 25;
        this.listImage[key].opacity = 0.7;
        this.listImage[key].transform = 'scale(1.3)';
        this.listImage[key].zindex = 2;
      }else if(value.left == 25){
        this.listImage[key].left = 35;
        this.listImage[key].opacity = 1;
        this.listImage[key].transform = 'scale(1.5)';
        this.listImage[key].zindex = 3;
      }else if(value.left == 35){
        this.listImage[key].left = 45;
        this.listImage[key].opacity = 0.7;
        this.listImage[key].transform = 'scale(1.3)';
        this.listImage[key].zindex = 2;
      }else if(value.left == 45){
        this.listImage[key].left = 55;
        this.listImage[key].opacity = 0.4;
        this.listImage[key].transform = 'scale(1)';
        this.listImage[key].zindex = 1;
      }
    });
  }

  onClickPrevImage(){
    this.listImage.forEach((value:any, key:any) => {
      if(value.left == 25){
        this.listImage[key].left = 15;
        this.listImage[key].opacity = 0.4;
        this.listImage[key].transform = 'scale(1)';
        this.listImage[key].zindex = 1;
      }else if(value.left == 35){
        this.listImage[key].left = 25;
        this.listImage[key].opacity = 0.7;
        this.listImage[key].transform = 'scale(1.3)';
        this.listImage[key].zindex = 2;
      }else if(value.left == 45){
        this.listImage[key].left = 35;
        this.listImage[key].opacity = 1;
        this.listImage[key].transform = 'scale(1.5)';
        this.listImage[key].zindex = 3;
      }else if(value.left == 55){
        this.listImage[key].left = 45;
        this.listImage[key].opacity = 0.7;
        this.listImage[key].transform = 'scale(1.3)';
        this.listImage[key].zindex = 2;
      }else if(value.left == 15){
        this.listImage[key].left = 55;
        this.listImage[key].opacity = 0.4;
        this.listImage[key].transform = 'scale(1)';
        this.listImage[key].zindex = 1;
      }
    });
  }

}
