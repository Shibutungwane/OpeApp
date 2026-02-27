import { Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { LucideAngularModule, MapPin, Phone, Upload,Mail } from 'lucide-angular';
import { AuthService } from '../Auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [LucideAngularModule, FormsModule, ReactiveFormsModule, CommonModule],
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserProfileComponent {
  readonly MapPinIcon = MapPin;
  readonly PhoneIcon = Phone;
  readonly UploadIcon = Upload;
  readonly Mail =Mail;

 

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  userForm = signal<FormGroup | null>(null);
  savedData =signal<boolean>(false);
  constructor(){
    effect(() => {
      console.log("Console Tis Effect", this.userForm)
    })
  }
  ngOnInit() {
    this.authService.userProfile().subscribe((user) => {
      this.userForm.set(this.createFormGroup(user)); // dynamically create controls
      console.log(user);
    });
  }

  createFormGroup(data: any): FormGroup {
    const group: any = {};
    Object.keys(data).forEach((key) => {
      group[key] = [data[key]];
    });
    return this.fb.group(group);
  }
  onSubmit() {
    // 1. Get the form instance from the signal
    const form = this.userForm();
   
    if (form && form.valid) {
      // 2. Use getRawValue() to ensure nested objects (address, hair)
      // and any disabled fields are included in the payload
      const payload = form.getRawValue();

       setTimeout(() => {
       this.savedData.set(true);
        }, 100);

      console.log('Final Payload:', payload);

      // 3. Send to your service
      // this.authService.updateProfile(payload).subscribe({
      //   next: (response) => {
      //     console.log('Profile updated successfully', response);
      //     // Optional: Reset dirty state so save button can disable again
      //     form.markAsPristine();
      //   },
      //   error: (err) => console.error('Update failed', err)
      // });
    } else {
      // Mark all as touched to show validation errors in the UI
      form?.markAllAsTouched();
    }
  }
}
