import { Component, OnInit } from '@angular/core';
import {
  LucideAngularModule,
  LayoutDashboard,
  Sparkles,
  ShoppingCart,
  Calendar,
  User,
  Clipboard,
  FileText,
  Table,
  ChevronDown,
  Undo2,
  Menu,
} from 'lucide-angular';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-Menu',
  templateUrl: './Menu.component.html',
  styleUrls: ['./Menu.component.css'],
  imports: [LucideAngularModule, RouterLink, RouterModule],
})
export class MenuComponent implements OnInit {
  icons = {
    LayoutDashboard,
    Sparkles,
    ShoppingCart,
    Calendar,
    User,
    Clipboard,
    FileText,
    Table,
    ChevronDown,
    Undo2,
    Menu,
  };
  constructor() { }

  ngOnInit() {
  }

}
