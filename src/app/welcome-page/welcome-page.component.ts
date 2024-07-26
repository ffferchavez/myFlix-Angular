import { Component, OnInit } from '@angular/core';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { MatDialog } from '@angular/material/dialog';

/**
 * Component that displays the welcome page with options to sign up or log in.
 * 
 * @component
 * @example
 * <app-welcome-page></app-welcome-page>
 */
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  /**
   * Creates an instance of WelcomePageComponent.
   * 
   * @param dialog Service for opening dialogs.
   */
  constructor(public dialog: MatDialog) { }

  /**
   * Lifecycle hook that is called after the component has been initialized.
   */
  ngOnInit(): void { }

  /**
   * Opens the user registration dialog.
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '400px'
    });
  }

  /**
   * Opens the user login dialog.
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '400px'
    });
  }
}
