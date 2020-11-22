import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-list',
  templateUrl: './home-page-list.component.html',
  styleUrls: ['./home-page-list.component.css']
})
export class HomePageListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   articleList= [
    {id:12,name:"到喜马拉雅山放羊"},
    {id:11,name:"姑苏往事"}
  ]

}
