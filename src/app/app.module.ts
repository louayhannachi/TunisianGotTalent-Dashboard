import { NotificationDialogComponent } from './shared/notification-dialog/notification-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { authentificationComponent } from './shared/authentification/authentification.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { ForumComponent } from './tunisian-got-talent/modules/forum-management/forum/forum.component';
import { CommonModule } from '@angular/common';
import { CreateCompetitionComponent } from './tunisian-got-talent/modules/competition-mangement/components/create-competition/create-competition.component';
import { CompetitionListComponent } from './tunisian-got-talent/modules/competition-mangement/competition-list/competition-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    authentificationComponent,
    NotificationDialogComponent,
    ForumComponent,
    CreateCompetitionComponent,
    CompetitionListComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
