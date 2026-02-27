import { Component, OnInit } from '@angular/core';
import { StatCardComponent } from "./stats/stats.component";

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css'],
  imports: [StatCardComponent]
})
export class DashboardComponent implements OnInit {

  constructor() { }
 sparkData1 = [
  {
    value: 10,
  },
  {
    value: 15,
  },
  {
    value: 12,
  },
  {
    value: 20,
  },
  {
    value: 25,
  },
  {
    value: 35,
  },
  {
    value: 50,
  },
]
 sparkData2 = [
  {
    value: 10,
  },
  {
    value: 12,
  },
  {
    value: 20,
  },
  {
    value: 20,
  },
  {
    value: 25,
  },
  {
    value: 40,
  },
]
 sparkData3 = [
  {
    value: 10,
  },
  {
    value: 12,
  },
  {
    value: 8,
  },
  {
    value: 15,
  },
  {
    value: 30,
  },
  {
    value: 25,
  },
]
avatars: string[] = [
    '/bg4.jpg',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64',
 
  ];
  ngOnInit() {
  }

}
