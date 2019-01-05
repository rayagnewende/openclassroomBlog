import { Injectable } from '@angular/core';
import { Post } from '../models/Post.models';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  postsSubcription = new Subject<Post[]>();
  posts: Post[] = [
    {
      id:1,
      title:"First post",
      content:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
      loveIts:0,
      create:'06/06/2018'
    },
    {
      id:2,
      title:"second post",
      content:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
      loveIts:0,
      create:'06/06/2018'
    },
    {
      id:3,
      title:"third post",
      content:"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
      loveIts:0,
      create:'06/06/2018'
    }

  ];

  constructor() { }

  emitPosts()
  {
    this.postsSubcription.next(this.posts);
  }

  savePosts()
  {
    firebase.database().ref('/posts').set(this.posts) ;
  }

  ajouterUnPost(post:Post)
  {
    post.id = this.posts[this.posts.length-1].id + 1 ;
    post.create = new Date();
    this.posts.push(post);
    this.savePosts() ;
    this.emitPosts();
  }

  supprimerUnPost(Npost:Post)
  {
    this.posts.splice(Npost.id,1);
    this.emitPosts();
  }


  updateLoveIts(index:number, love:number)
  {
     this.posts[index].loveIts = love ;
  }

  
}
