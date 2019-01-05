import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { ListPostItemComponent } from './list-post-item/list-post-item.component';
import { PostsService } from './services/posts.service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post/new-post.component';
import { HeaderComponent } from './header/header/header.component';

const appRoutes: Routes = [

  { path:'posts', component:PostListComponent},
  { path:'posts/new', component:NewPostComponent},
  { path:'', redirectTo:'posts', pathMatch:'full'},
  { path:'**' , redirectTo:'posts'}

]; 
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    ListPostItemComponent,
    NewPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
