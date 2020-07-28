import { NgModule } from '@angular/core';
import { ForumComponent } from './forum/forum.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    providers: [],
    declarations: [ForumComponent]
})
export class ForumModule {}
