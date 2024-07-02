import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogTab: any = [
    { description: 'equipe', title: 'real ', date: '12/12/2024', img: 'assets/images/img_1.jpg' },
    { description: 'champion', title: 'barca', date: '12/12/2024', img: 'assets/images/img_1.jpg' },
    { description: 'equipe', title: 'city', date: '12/12/2024', img: 'assets/images/img_2.jpg' },
    { description: 'champion', title: 'liverpool', date: '12/12/2024', img: 'assets/images/img_3.jpg' },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
