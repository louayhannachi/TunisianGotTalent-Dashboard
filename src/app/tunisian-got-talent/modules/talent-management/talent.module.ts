import { TalenBlockedListComponent } from './components/talent-blocked-list/talent-blocked-list.component';
import { TalentStatisticsComponent } from './components/talent-statistics/talent-statistics.component';
import { TalentListComponent } from './components/talent-list/talent-list.component';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    providers: [],
    declarations: [TalentListComponent, TalentStatisticsComponent, TalenBlockedListComponent]
})
export class TalentModule {}
