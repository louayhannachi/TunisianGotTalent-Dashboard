import { Router, ActivatedRoute } from "@angular/router";
import {
  AlertNotificationSubject,
  dialogTypes,
} from "./../../../../models/user.model";
import { CategoryModel } from "./../../models/event.model";
import { EventService } from "./../../services/event.services";
import { FormGroup } from "@angular/forms";
import { FormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";

@Component({
  selector: "app-create-category",
  templateUrl: "./create-category.component.html",
  styleUrls: ["./create-category.component.css"],
})
export class CreateCategoryComponent implements OnInit {
  form: FormGroup;
  idCategory: number;
  activateEditMode: boolean = false;
  category: any;
  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getIdFromPath();
  }

  getIdFromPath() {
    this.activateRouter.params.subscribe((params) => {
      if (params["id"]) {
        this.idCategory = params["id"];
        this.activateEditMode = true;
        this.getCategoryByID(this.idCategory);
      }
    });
  }

  initForm() {
    this.form = this.fb.group({
      category: ["", Validators.required],
    });
  }

  getCategoryByID(idCat) {
    this.eventService.getCategoryById(idCat).subscribe((result) => {
      this.category = result;
      this.patchField(this.category);
    });
  }

  patchField(category) {
    this.form.controls.category.setValue(category.titrecat);
  }

  addCategory() {
    if (this.form.valid) {
      let category = new CategoryModel();
      category.titrecat = this.form.controls.category.value;
      if (this.activateEditMode) {
        category.id = this.category.id;
        this.eventService.editCategory(category).subscribe((result) => {
          AlertNotificationSubject.next({
            dialogType: dialogTypes.SUCCESS,
            message: "Category Edited With Success",
            okBtn: true,
            okBtnAction: (): void => {
              this.router.navigate(["/category"]);
            },
          });
        });
      } else {
        this.eventService.createCategory(category).subscribe((result) => {
          AlertNotificationSubject.next({
            dialogType: dialogTypes.SUCCESS,
            message: "Category Created With Success",
            okBtn: true,
            okBtnAction: (): void => {
              this.router.navigate(["/category"]);
            },
          });
        });
      }
    }
  }
}
