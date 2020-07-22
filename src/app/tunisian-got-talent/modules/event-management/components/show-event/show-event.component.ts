import { EventService } from "./../../services/event.services";
import { EventModel, CategoryModel } from "./../../models/event.model";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "show-event",
  templateUrl: "./show-event.component.html",
  styleUrls: ["./show-event.component.css"],
})
export class ShowEventComponent implements OnInit {
  events: EventModel[];
  constructor(private eventService: EventService) {}

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
}
