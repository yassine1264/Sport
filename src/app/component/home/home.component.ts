import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  match: any={
    id:1,
    scoreone:2,
    scoretwo:0,
    teamone:'FCB',
    teamtwo:'RMD',
  };


  constructor() { }

  ngOnInit(): void {
  }

}
