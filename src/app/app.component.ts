import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './models/Post.models';
import { PostsService } from './services/posts.service';
import { Subscription } from 'rxjs';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
constructor()
{
  var config = {
    apiKey: "AIzaSyB7J0wgeNLF0SQuQnRAG3qrVxEMdSMr43c",
    authDomain: "blogproject2-c824b.firebaseapp.com",
    databaseURL: "https://blogproject2-c824b.firebaseio.com",
    projectId: "blogproject2-c824b",
    storageBucket: "blogproject2-c824b.appspot.com",
    messagingSenderId: "904618545256"
  };
  firebase.initializeApp(config);

}


}
