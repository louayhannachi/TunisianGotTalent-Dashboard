import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { EventService } from './../../services/event.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      titre: ["", Validators.required],
      category: ["", Validators.required],
      date: ["", Validators.required],
      nbPlaces: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

}
