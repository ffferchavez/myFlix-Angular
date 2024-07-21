import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: any = {};

  constructor(private fetchApiData: FetchApiDataService) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  getUserProfile(): void {
    this.fetchApiData.getUserProfile().subscribe((resp: any) => {
      this.user = resp;
    });
  }

  updateProfile(): void {
    // Implement the logic to update the user profile
    console.log('Update Profile method called');
  }
}
