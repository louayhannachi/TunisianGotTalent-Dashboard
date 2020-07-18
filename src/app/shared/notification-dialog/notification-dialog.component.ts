import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.scss']
})
export class NotificationDialogComponent implements OnInit {

  panelOpenState = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

   executeCustomAction(){
    if (this.data.customBtnAction !== undefined && typeof this.data.customBtnAction === 'function') {
      this.data.customBtnAction();
    }
   }

   executeOkAction(){
    if (this.data.okBtnAction !== undefined && typeof this.data.okBtnAction === 'function') {
      this.data.okBtnAction();
    }
   }

   executeCancelAction(){
    if (this.data.cancelBtnAction !== undefined && typeof this.data.cancelBtnAction === 'function') {
      this.data.cancelBtnAction();
    }
   }
}
