import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from 'src/app/posts/post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  addPost(title: string, content: string) {
    const post: Post = {title, content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
  getPostUpdatedListener() {
    return this.postsUpdated.asObservable();
  }
}
