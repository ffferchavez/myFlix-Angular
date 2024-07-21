import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  loginData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

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
