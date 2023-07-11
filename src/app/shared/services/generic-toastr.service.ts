import { Injectable } from '@angular/core';
import { ProgressAnimationType, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class GenericToastrService {
  constructor(private toastr: ToastrService) {}

  showToast(
    msg: string,
    titulo: string,
    type: 'success' | 'error' | 'warning',
    closeBtn: boolean
  ): void {
    const toastrOptions = {
      closeButton: closeBtn,
      progressBar: true,
      progressAnimation: 'increasing' as ProgressAnimationType,
      positionClass: 'toast-top-right',
      tapToDismiss: true,
      timeOut: 5000,
      easing: 'ease-in',
      easeTime: 300,
      extendedTimeOut: 2000,
    };

    switch (type) {
      case 'success':
        this.toastr.success(msg, titulo, toastrOptions);
        break;
      case 'error':
        this.toastr.error(msg, titulo, toastrOptions);
        break;
      case 'warning':
        this.toastr.warning(msg, titulo, toastrOptions);
        break;
    }
  }
}
