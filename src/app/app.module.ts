import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TnbHeaderComponent } from './components/tnb-header/tnb-header.component';
import { TnbFooterComponent } from './components/tnb-footer/tnb-footer.component';
import { TnbHomeComponent } from './components/tnb-home/tnb-home.component';
import { TnbSubscribersComponent } from './components/tnb-subscribers/tnb-subscribers.component';
import { TnbConfigComponent } from './components/tnb-config/tnb-config.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    TnbHeaderComponent,
    TnbFooterComponent,
    TnbHomeComponent,
    TnbSubscribersComponent,
    TnbConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'de',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [MatIconModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
