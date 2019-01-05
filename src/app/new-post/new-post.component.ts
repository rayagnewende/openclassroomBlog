import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post.models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

   formPost:FormGroup;

  constructor(private formbuilder: FormBuilder,
              private postsservice: PostsService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm()
  {
    this.formPost = this.formbuilder.group({
      title: ['', Validators.required],
      content: ['',Validators.required]
    });
  }

  onAddPost()
  {
    const title = this.formPost.get('title').value;
    const content = this.formPost.get('content').value;
    const post = new Post(title,content);
    this.postsservice.ajouterUnPost(post);
    this.router.navigate(['/posts']);
  }

}
