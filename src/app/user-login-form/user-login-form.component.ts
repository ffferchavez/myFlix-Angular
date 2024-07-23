import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

/**
 * Component that provides a user login form.
 * 
 * @component
 * @example
 * <app-user-login-form></app-user-login-form>
 */
@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  /** Object holding the username and password for login. */
  loginData = { Username: '', Password: '' };

  /**
   * Creates an instance of UserLoginFormComponent.
   * 
   * @param fetchApiData Service to handle API requests related to user authentication.
   * @param dialogRef Reference to the dialog containing this component.
   * @param snackBar Service for displaying snack bar notifications.
   * @param router Service for navigation.
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  /**
   * Lifecycle hook that is called after the component has been initialized.
   */
  ngOnInit(): void { }

  /**
   * Handles user login by sending credentials to the API and processing the response.
   */
  loginUser(): void {
    this.fetchApiData.loginUser(this.loginData).subscribe((result) => {
      // Store user data and token in localStorage
      const userData = {
        Username: result.user.Username,
        token: result.token
      };
      localStorage.setItem('user', JSON.stringify(userData));

      this.dialogRef.close(); // Close the dialog on success
      this.snackBar.open('Login successful!', 'OK', {
        duration: 2000
      });

      // Navigate to the movies page after successful login
      this.router.navigate(['movies']);
    }, (error) => {
      // Handle different types of errors
      let errorMessage = 'Login failed';
      if (error.error) {
        if (error.error.message) {
          errorMessage = error.error.message;
        } else if (typeof error.error === 'string') {
          errorMessage = error.error;
        }
      }
      this.snackBar.open(errorMessage, 'OK', {
        duration: 2000
      });
    });
  }
}
