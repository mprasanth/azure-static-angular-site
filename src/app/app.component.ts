import { Component } from '@angular/core';
import { DateTimeUtils } from '@microsoft/applicationinsights-common';
import { MyMonitoringService } from './monitoring.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';

  constructor(myMService : MyMonitoringService) {
      myMService.logEvent("AppComponent Initialized");
      myMService.logTrace("This is to test the traces from ToDO App");
      myMService.logException(new Error("App Failed to load"));
  }
}
