import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { ListPostItemComponent } from './list-post-item/list-post-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    ListPostItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
