import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleBannerComponent } from './common-components/article-banner/article-banner.component';
import { FormsModule } from '@angular/forms';
import {HomePageModule} from './home-page/home-page.module';
import { NotFoundPageComponent } from './common-components/not-found-page/not-found-page.component';
import {PersonMottoModule} from './person-motto/person-motto.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ArticleBannerComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomePageModule,
    PersonMottoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
