import { Component } from '@angular/core';
import {FreshPost} from './FreshPost';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    new FreshPost('titre', 'content 1 '),
    new FreshPost('titre', 'content 2 '),
    new FreshPost('titre', 'content 3 '),
    new FreshPost('titre', 'content 4 '),
    new FreshPost('titre', 'content 5 ')
  ];
  constructor() {
  }
}
