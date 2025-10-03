
import { Component, OnInit } from '@angular/core';
import { Global } from '../../services/global';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData = {
    first_name: '',
    last_name: '',
    phone: '',
    email: ''
  };
  userId: number = 348; // Hardcoded user ID for now, this should come from authentication

  constructor(private globalService: Global) { }

  ngOnInit(): void {
    // In a real application, you would fetch the user's current profile data here
    // and populate profileData with it.
  }

  updateProfile(): void {
    this.globalService.updateProfile(this.userId, this.profileData).subscribe(
      (response) => {
        console.log('Profile updated successfully:', response);
        alert('Profile updated successfully!');
      },
      (error) => {
        console.error('Error updating profile:', error);
        alert('Error updating profile. Please try again.');
      }
    );
  }

}
