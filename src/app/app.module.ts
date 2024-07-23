import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { FetchApiDataService } from './fetch-api-data.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { GenreDialogComponent } from './genre-dialog/genre-dialog.component';
import { DirectorDialogComponent } from './director-dialog/director-dialog.component';
import { MovieDetailDialogComponent } from './movie-detail-dialog/movie-detail-dialog.component';
import { HeaderComponent } from './header/header.component';

/**
 * Defines the application routes.
 * 
 * @constant
 * @type {Routes}
 */
const appRoutes: Routes = [
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'movies', component: MovieCardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'movie-details/:id', component: MovieDetailsComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
];

/**
 * The root module of the application.
 * 
 * @module
 */
@NgModule({
  declarations: [
    /** The root component of the application. */
    AppComponent,
    /** Component for user registration form. */
    UserRegistrationFormComponent,
    /** Component for user login form. */
    UserLoginFormComponent,
    /** Component displaying movie cards. */
    MovieCardComponent,
    /** Component for the welcome page. */
    WelcomePageComponent,
    /** Component for displaying and editing user profile. */
    UserProfileComponent,
    /** Component displaying detailed information about a movie. */
    MovieDetailsComponent,
    /** Dialog component for displaying genre information. */
    GenreDialogComponent,
    /** Dialog component for displaying director information. */
    DirectorDialogComponent,
    /** Dialog component for displaying movie details. */
    MovieDetailDialogComponent,
    /** Component for the header of the application. */
    HeaderComponent
  ],
  imports: [
    /** Module for browser support. */
    BrowserModule,
    /** Module for browser animations. */
    BrowserAnimationsModule,
    /** Module for template-driven forms. */
    FormsModule,
    /** Module for Angular Material input components. */
    MatInputModule,
    /** Module for Angular Material button components. */
    MatButtonModule,
    /** Module for Angular Material card components. */
    MatCardModule,
    /** Module for Angular Material snack-bar components. */
    MatSnackBarModule,
    /** Module for HTTP client services. */
    HttpClientModule,
    /** Module for Angular Material dialog components. */
    MatDialogModule,
    /** Module for routing and navigation. */
    RouterModule.forRoot(appRoutes),
    /** Module for Angular Material icon components. */
    MatIconModule
  ],
  providers: [
    /** Service for fetching API data. */
    FetchApiDataService
  ],
  bootstrap: [
    /** The root component to bootstrap the application. */
    AppComponent
  ]
})
export class AppModule { }
