import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {

    constructor(private toastrService: ToastrService) { }

    showError(message: any, title: any) {
        this.toastrService.error(message, title)
    }

    showSuccess(message: any, title: any) {
        this.toastrService.success(message, title)
    }

}
