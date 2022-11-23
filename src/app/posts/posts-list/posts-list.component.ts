import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent  {

  @Input() post: Post[] | undefined;
  @Output() buttonClick = new EventEmitter();

  onClick(){
    this.buttonClick.emit(null);
  }
  
}
