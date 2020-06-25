import { EventService } from "./../../services/event.services";
import { EventModel } from "./../../models/event.model";
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
    this.eventService.getAll().subscribe((result) => {
      console.log("result", result);
      result ? (this.events = result) : console.log("no Evens");
    });
  }
}
