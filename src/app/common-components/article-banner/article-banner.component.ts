import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-article-banner',
  templateUrl: './article-banner.component.html',
  styleUrls: ['./article-banner.component.css']
})
export class ArticleBannerComponent implements OnInit {

  constructor(private router: Router) { 

    this.router.events.subscribe( (event: RouterEvent) => console.log(event))
  }

  ngOnInit(): void {
  }

}
