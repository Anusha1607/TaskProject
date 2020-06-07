import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TemplateComponent } from './component/template/template.component';



export function HttpLoaderFactory(httpClient: HttpClient) {

}
@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
