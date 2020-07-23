import { CommonModule } from '@angular/common';
import { TalenBlockedListComponent } from './components/talent-blocked-list/talent-blocked-list.component';
import { TalentStatisticsComponent } from './components/talent-statistics/talent-statistics.component';
import { TalentListComponent } from './components/talent-list/talent-list.component';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports: [ChartsModule, CommonModule],
    providers: [],
    declarations: [TalentListComponent, TalentStatisticsComponent, TalenBlockedListComponent]
})
export class TalentModule {}
