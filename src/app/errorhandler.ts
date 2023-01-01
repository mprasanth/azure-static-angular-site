import { Injectable } from "@angular/core";
import { ErrorHandler } from "@angular/core";
import { MyMonitoringService } from "./monitoring.service";

@Injectable()
export class ErrorHandlerService extends ErrorHandler {

    constructor(private loggingService: MyMonitoringService) {
        super();
    }

    override handleError(error: Error) {
        this.loggingService.logException(error); // Manually log exception
    }
}