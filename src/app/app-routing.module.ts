import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ArticleBannerComponent } from './common-components/article-banner/article-banner.component';
import { NotFoundPageComponent } from './common-components/not-found-page/not-found-page.component';
const routes: Routes = [
  {
    path: 'home', //非懒加载
    component: ArticleBannerComponent
  },
  {
    path: 'article-list',//懒加载
    loadChildren: './home-page/home-page.module#HomePageModule'
  },
  {
    path: 'motto',
    loadChildren: './person-motto/person-motto.module#PersonMottoModule'
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      enableTracing: true,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
