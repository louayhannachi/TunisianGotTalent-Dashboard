import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCompetitionComponent } from './components/create-competition/create-competition.component';
import { CompetitionListComponent } from './competition-list/competition-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CompetitionStatisticsComponent } from './components/competition-statistics/competition-statistics.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule 
    ],
    providers: [],
    declarations: [CreateCompetitionComponent, CompetitionListComponent, CompetitionStatisticsComponent],
    exports: []
})
export class CompetitionModule {}
