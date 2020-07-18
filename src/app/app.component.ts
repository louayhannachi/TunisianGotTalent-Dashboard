import { NotificationDialogComponent } from './shared/notification-dialog/notification-dialog.component';
import { AlertNotificationSubject } from "./tunisian-got-talent/models/user.model";
import { MatDialog } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import { LocationStrategy, PlatformLocation, Location } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  constructor(public location: Location, public dialog: MatDialog) {}

  ngOnInit() {
    AlertNotificationSubject.subscribe((dialogData) => {
      this.openDialog(dialogData);
    });
  }

  openDialog(dialogData) {
    let dialogRef = this.dialog.open(
      NotificationDialogComponent,
      {
        data: dialogData,
        closeOnNavigation: true,
      }
    );
  }

  isMap(path) {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    titlee = titlee.slice(1);
    if (path == titlee) {
      return false;
    } else {
      return true;
    }
  }
}
