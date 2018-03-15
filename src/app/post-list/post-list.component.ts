import { Component, Input, OnInit } from '@angular/core';
import {FreshPost} from '../FreshPost';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() listPost: FreshPost[];
  @Input() FirstPost: FreshPost;
  @Input() TitlePost: string;
  constructor() {}

  ngOnInit() {
  }

}
