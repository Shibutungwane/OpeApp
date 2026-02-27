import { Component, inject, signal } from '@angular/core';
import {
  LucideAngularModule,
  Menu,
  Search,
  Moon,
  Bell,
  ChevronDown
} from 'lucide-angular';
import { AuthService } from '../Auth/auth.service';
import { NotificationsComponent } from "../notifications/notifications.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule, NotificationsComponent],
  templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  icons = {

  Menu,
  Search,
  Moon,
  Bell,
  ChevronDown
  }

  constructor(private authService: AuthService) {}

username = signal(''); 
isNotifyOpen = signal<boolean>(false);

  showNotication() {
    this.isNotifyOpen.update((val) => !val);
  }
ngOnInit() {
  this.authService.userProfile().subscribe((user) => {
    this.username.set(user.username); 
  });
}

}
