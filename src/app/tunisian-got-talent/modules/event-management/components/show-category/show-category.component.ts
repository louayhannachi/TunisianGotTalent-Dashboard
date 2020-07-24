import { Router, ActivatedRoute } from '@angular/router';
import { CategoryModel } from "./../../models/event.model";
import { EventService } from "./../../services/event.services";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-show-category",
  templateUrl: "./show-category.component.html",
  styleUrls: ["./show-category.component.css"],
})
export class ShowCategoryComponent implements OnInit {
  category: CategoryModel[];
  
  constructor(private eventService: EventService, private router:Router) {}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.eventService.getAllCategory().subscribe((result) => {
      result ? (this.category = result) : console.log("No Category");
    });
  }

  deleteCategory(id) {
    this.eventService.deleteCategory(id).subscribe((result) => {
      this.getAllCategory();
    });
  }

  editCategory(id){
    this.router.navigate(['/createCategory',id])
  }
}
