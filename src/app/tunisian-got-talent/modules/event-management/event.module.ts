import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { ShowEventComponent } from './components/show-event/show-event.component';
import { EventService } from './services/event.services';
import { NgModule } from '@angular/core';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { ShowCategoryComponent } from './components/show-category/show-category.component';
import { RatingStatistiqueComponent } from './components/rating-statistique/rating-statistique.component';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
    imports: [CommonModule,MatCardModule,MatDatepickerModule,MatFormFieldModule, MatNativeDateModule, MatInputModule,
        MatIconModule,ReactiveFormsModule],
    providers: [EventService],
    declarations: [ShowEventComponent, CreateEventComponent, CreateCategoryComponent, ShowCategoryComponent, RatingStatistiqueComponent],
    exports :[]
})
export class EventModule {}
