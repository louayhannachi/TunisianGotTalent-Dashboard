import { CommonModule } from '@angular/common';
import { ShowEventComponent } from './components/show-event/show-event.component';
import { EventService } from './services/event.services';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [CommonModule],
    providers: [EventService],
    declarations: [ShowEventComponent],
    exports :[]
})
export class EventModule {}
