import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

/**
 * Component that displays and allows updating the user profile.
 * 
 * @component
 * @example
 * <app-user-profile></app-user-profile>
 */
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  /** Object holding user profile information. */
  user: any = {};

  /**
   * Creates an instance of UserProfileComponent.
   * 
   * @param fetchApiData Service to handle API requests related to user data.
   */
  constructor(private fetchApiData: FetchApiDataService) {}

  /**
   * Lifecycle hook that is called after the component has been initialized.
   * Retrieves the user profile data.
   */
  ngOnInit(): void {
    this.getUserProfile();
  }

  /**
   * Fetches the user profile data from the API and assigns it to the `user` object.
   */
  getUserProfile(): void {
    this.fetchApiData.getUserProfile().subscribe((resp: any) => {
      this.user = resp;
    });
  }

  /**
   * Updates the user profile with new data.
   * 
   * Note: Implement the logic to update the profile in this method.
   */
  updateProfile(): void {
    // Implement the logic to update the user profile
    console.log('Update Profile method called');
  }
}
