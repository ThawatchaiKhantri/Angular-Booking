import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsFormComponent } from './posts/posts-form/posts-form.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { PostComponent } from './posts/post/post.component';
import { FormsModule } from '@angular/forms';
import { PostFormImageComponent } from './posts/post-form-image/post-form-image.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostsFormComponent,
    PostsListComponent,
    PostComponent,
    PostsFormComponent,
    PostFormImageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
