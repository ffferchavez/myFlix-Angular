import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * Component that provides a user registration form.
 * 
 * @component
 * @example
 * <app-user-registration-form></app-user-registration-form>
 */
@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  /** Object holding user registration data. */
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   * Creates an instance of UserRegistrationFormComponent.
   * 
   * @param fetchApiData Service to handle API requests related to user registration.
   * @param dialogRef Reference to the dialog containing this component.
   * @param snackBar Service for displaying snack bar notifications.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  /**
   * Lifecycle hook that is called after the component has been initialized.
   */
  ngOnInit(): void { }

  /**
   * Handles user registration by sending form data to the API and processing the response.
   */
  registerUser(): void {
    this.fetchApiData.registerUser(this.userData).subscribe((result) => {
      // Logic for a successful user registration goes here! (To be implemented)
      this.dialogRef.close(); // Close the dialog on success
      this.snackBar.open('User registered successfully!', 'OK', {
        duration: 2000
      });
    }, (error) => {
      this.snackBar.open(error.error.message || 'An error occurred', 'OK', {
        duration: 2000
      });
    });
  }
}
