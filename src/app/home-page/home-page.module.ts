import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageListComponent } from './home-page-list/home-page-list.component';
import { HomePageRouting } from './home-page-routing.module';
import { ArticleObjectComponent } from './article-object/article-object.component'



@NgModule({
  declarations: [HomePageListComponent, ArticleObjectComponent],
  imports: [
    CommonModule,
    HomePageRouting
  ]
})
export class HomePageModule { }
