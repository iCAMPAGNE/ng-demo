import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  status: string = 'not clicked';
  h1Style: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  firstClick() {
      console.log('clicked');
      this.status = 'clicked';
      this.h1Style = true;
      this.data.serviceClick();
  }

}
