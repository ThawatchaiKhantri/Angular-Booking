import { Component,  } from '@angular/core';
import { Post } from './shared/post.model';
import { View } from './shared/view';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  {
  posts: Post[] = [];
  View = View
  currentView = View.SHOW_ALL;
  
  createPost(post:Post){
    this.posts.push(post);
    this.changeCurrentView(View.SHOW_ALL);
  }

  changeCurrentView(view: View){
    this.currentView = view;
  }
}
