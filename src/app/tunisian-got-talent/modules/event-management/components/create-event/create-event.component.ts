import { Router, ActivatedRoute } from '@angular/router';
import {
  AlertNotificationSubject,
  dialogTypes,
} from "./../../../../models/user.model";
import { CategoryModel, EventModel } from "./../../models/event.model";
import { FormGroup, Validators } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { EventService } from "./../../services/event.services";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.css"],
})
export class CreateEventComponent implements OnInit {
  form: FormGroup;
  category: CategoryModel[];
  activateEditMode: boolean = false;
  idEvent : number;
  event: EventModel;
  constructor(
    private fb: FormBuilder, 
    private eventService: EventService,
    private router: Router,
    private activateRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.getIdFromPath();
    this.getAllCategory();
    this.initForm();
  }

  getIdFromPath() {
    this.activateRouter.params.subscribe((params) => {
      if (params["id"]) {
        this.idEvent = params["id"];
        this.activateEditMode = true;
        this.getEventByID(this.idEvent);
      }
    });
  }

  getEventByID(idEvent) {
    this.eventService.getById(idEvent).subscribe((result) => {
      this.event = result;
      this.patchField(this.event);
    });
  }

  patchField(event){
    this.form.controls.titre.setValue(event.titre);
    this.form.controls.category.setValue(event.idcat.id);
    this.form.controls.date.setValue(new Date(
      Date.parse(event.date)))
    this.form.controls.nbPlaces.setValue(event.nbparticipant);
    this.form.controls.description.setValue(event.description);
  }

  initForm() {
    this.form = this.fb.group({
      titre: ["", Validators.required],
      category: ["", Validators.required],
      date: ["", Validators.required],
      nbPlaces: ["", Validators.required],
      description: ["", Validators.required],
    });
  }

  getAllCategory() {
    this.eventService.getAllCategory().subscribe((result) => {
      result ? (this.category = result) : (this.category = []);
    });
  }

  addEvent() {
    if (this.form.valid) {
      let event = new EventModel();
      event.idcat = new CategoryModel();
      event.titre = this.form.controls.titre.value;
      event.idcat.id = this.form.controls.category.value;
      event.date = new Date(
        Date.parse(this.form.controls.date.value)
      ).toString();
      event.nbparticipant = this.form.controls.nbPlaces.value;
      event.description = this.form.controls.description.value;
      if (this.activateEditMode) {
        event.id = this.idEvent;
        this.eventService.editEvent(event).subscribe((result) => {
          AlertNotificationSubject.next({
            dialogType: dialogTypes.SUCCESS,
            message: "Event Created With Success",
            okBtn: true,
            okBtnAction: (): void => {
              this.router.navigate(["/event"]);
            },
          });
        });
      } else {
        this.eventService.createEvent(event).subscribe((result) => {
          AlertNotificationSubject.next({
            dialogType: dialogTypes.SUCCESS,
            message: "Event Created With Success",
            okBtn: true,
            okBtnAction: (): void => {
              this.router.navigate(["/event"]);
            },
          });
        });
      }
    }
  }
}
