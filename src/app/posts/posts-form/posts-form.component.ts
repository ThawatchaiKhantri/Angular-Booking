import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../shared/post.model';

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.scss']
})
export class PostsFormComponent {

  @Output() formSubmit: EventEmitter<Post> = new EventEmitter();
  model: Post = new Post();
  
  constructor(){
    this.resetPost();
  }

  createPosts(){
    this.formSubmit.emit(this.model);
    this.resetPost();
  }

  changeImage(image:string){
    this.model.image = image;
  }

  private resetPost(){
    this.model =new Post();
  }
}
