import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger(
      'searchBarAnimation',
      [
        transition(
          ':enter',
          [
            style({ width: 0,}),
            animate('1s ease-out',
                    style({ width: '55vw', opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ width: '55vw', opacity: 1 }),
            animate('1s ease-in',
                    style({ width: 0, }))
          ]
        )
      ]
    )
  ]
})
export class HeaderComponent implements OnInit {

  showSearchBar = false;
  displaySearchIcon = {'display': 'block'};

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.showSearchBar = !this.showSearchBar;
    if(this.showSearchBar==true){
      setTimeout(()=>this.displaySearchIcon={'display': 'none'},0)
    }else{
      setTimeout(()=>this.displaySearchIcon={'display': 'block'},1000)
    }
  }
}
