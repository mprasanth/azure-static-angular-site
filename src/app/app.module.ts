import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ErrorHandler } from '@angular/core';
import { ErrorHandlerService } from './errorhandler';
import { MyMonitoringService } from "./monitoring.service";

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],  
  providers: [
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    {provide:MyMonitoringService, useClass: MyMonitoringService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
