import { authentificationComponent } from './../../shared/authentification/authentification.component';
import { TalenBlockedListComponent } from './../../tunisian-got-talent/modules/talent-management/components/talent-blocked-list/talent-blocked-list.component';
import { TalentStatisticsComponent } from './../../tunisian-got-talent/modules/talent-management/components/talent-statistics/talent-statistics.component';
import { TalentListComponent } from './../../tunisian-got-talent/modules/talent-management/components/talent-list/talent-list.component';
import { ShowEventComponent } from './../../tunisian-got-talent/modules/event-management/components/show-event/show-event.component';
import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: '',      component: authentificationComponent },
    { path: 'talent',      component: HomeComponent },
    { path: 'talentList',      component: TalentListComponent },
    { path: 'TalentStatistics',      component: TalentStatisticsComponent },
    { path: 'TalenBlockedList',      component: TalenBlockedListComponent },
    { path: 'business',           component: UserComponent },
    { path: 'event',          component: ShowEventComponent },
    { path: 'forum',     component: TypographyComponent },
    { path: 'competition',          component: IconsComponent },
    { path: 'authentification',      component: authentificationComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
