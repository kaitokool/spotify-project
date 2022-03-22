import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-music',
  templateUrl: './list-music.component.html',
  styleUrls: ['./list-music.component.css'],
  providers:[DatePipe]
})
export class ListMusicComponent implements OnInit {
  testDate:any;

  constructor(public datePipe: DatePipe) { }

  ngOnInit(): void {
    this.testDate = new Date();
    this.testDate.setDate(this.testDate.getDate() + 2);
    this.testDate = this.datePipe.transform(this.testDate, 'yyyy-MM-dd hh:mm:ss');  
  }

}
