import { Component, OnInit, Input } from '@angular/core';

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
  constructor() {
    setTimeout(
      () => {
        this.create = new Date();
      },1000
    );
   }

  ngOnInit() {
  }
  
   
  addLoveIt() 
  {
    this.loveIts++;
  }

  addDontLoveIt()
  {
    this.loveIts--;
  }

}
