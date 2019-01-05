import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/Post.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-post-item',
  templateUrl: './list-post-item.component.html',
  styleUrls: ['./list-post-item.component.scss']
})
export class ListPostItemComponent implements OnInit {

  @Input() title ;
  @Input() content ;
  @Input() loveIts ;
  @Input() create ;
  @Input() index ;
  constructor(private postsservice:PostsService,
              private router: Router) {

   }

  ngOnInit() {
  }
  
   
  addLoveIt() 
  {
    this.loveIts++;
    this.postsservice.updateLoveIts(this.index,this.loveIts);
  }

  addDontLoveIt()
  {
    this.loveIts--;
    this.postsservice.updateLoveIts(this.index,this.loveIts);
  }

  onRemovePost()
  {
     const post = new Post(this.title,this.content);
     post.id = this.index;
    this.postsservice.supprimerUnPost(post);
     this.router.navigate(['/posts']); 

  }

}
