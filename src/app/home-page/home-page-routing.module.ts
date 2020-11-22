import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageListComponent } from './home-page-list/home-page-list.component';
import { ArticleObjectComponent } from './article-object/article-object.component';

const routes: Routes = [
  { path: '', component: HomePageListComponent },//如何进入该模块都加载这个组件？
  {
    path: "article",
    children: [
      { path: ':id', component: ArticleObjectComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRouting { }
