import { MomentPipe } from './pipe/moment.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QueueDetailComponent } from './shop/queue-detail/queue-detail.component';
import { QueueDateComponent } from './shop/queue-date/queue-date.component';
import { QueueTimeComponent } from './shop/queue-time/queue-time.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QueueDetailComponent,
    QueueDateComponent,
    QueueTimeComponent,
    MomentPipe
  ],
  entryComponents: [
    QueueDetailComponent,
    QueueDateComponent,
    QueueTimeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
