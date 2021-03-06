import { Router } from '@angular/router';
import { EventService } from "./../../services/event.services";
import { EventModel, CategoryModel } from "./../../models/event.model";
import { Component, OnInit, Input } from "@angular/core";
import { format } from 'util';

@Component({
  selector: "show-event",
  templateUrl: "./show-event.component.html",
  styleUrls: ["./show-event.component.css"],
})
export class ShowEventComponent implements OnInit {
  events: EventModel[];
  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit() {
    this.getAllEvent();
  }

  getAllEvent() {
    this.eventService.getAll().subscribe((result) => {
      console.log("result", result);
      result ? (this.events = result) : console.log("no Evens");
    });
  }

  deleteEvent(id)
  {
    this.eventService.delete(id).subscribe((result) => {
      this.getAllEvent();
    });
  }

  editEvent(id){
    this.router.navigate(['/createEvent',id])
  }

  GetFormattedDate(date) {
    var todayTime = new Date(Date.parse(date));
    var month = format(todayTime .getMonth() + 1);
    var day = format(todayTime .getDate());
    var year = format(todayTime .getFullYear());
    return day + "/" + month + "/" + year;
}
}
