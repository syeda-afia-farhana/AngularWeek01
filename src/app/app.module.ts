import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { SupportComponent } from './pages/support/support.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './common/header/header.component';
import { HtmlcssComponent } from './common/htmlcss/htmlcss.component';
import { JavascriptComponent } from './common/javascript/javascript.component';
import { AngularComponent } from './common/angular/angular.component';
import { FooterComponent } from './common/footer/footer.component';
import { StudentComponent } from './shared/component/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    SupportComponent,
    ResourcesComponent,
    PageNotFoundComponent,
    HeaderComponent,
    HtmlcssComponent,
    JavascriptComponent,
    AngularComponent,
    FooterComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
