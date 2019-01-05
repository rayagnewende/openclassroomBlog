import { Component,Input,  OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/Post.models';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {
  
  posts: Post[] ;
  subcription:Subscription;
 
   constructor(private postsservice:PostsService)
   {
 
   }
 
   ngOnInit()
   {
     this.subcription = this.postsservice.postsSubcription.subscribe(
       (post:Post[]) => {
         this.posts = post;
       }
     );
     this.postsservice.emitPosts();
   }

   ngOnDestroy()
   {
     this.subcription.unsubscribe();
   }

}
