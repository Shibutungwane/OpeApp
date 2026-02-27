import { Component, inject, OnInit, signal } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor() { }
private notificationService = inject(NotificationService)
notificationData = signal<any[] | null>(null); 

  ngOnInit() {
    this.notificationService.notification().subscribe((notify) =>
    {
        this.notificationData.set(notify);
        console.log("Notication Data",this.notificationData())
    })
  }
openModal(notify: any) {
  this.notificationData.set(notify);
}

closeModal() {
  this.notificationData.set(null);
}
}
