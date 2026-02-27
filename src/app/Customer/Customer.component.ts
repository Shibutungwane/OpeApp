import { Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from '../Heading/Heading.component';
import { CustomerService } from './customer.service';
import { Plus, LucideAngularModule,ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-TestingPage',
  templateUrl: './Customer.component.html',
  styleUrls: ['./Customer.component.css'],
  imports: [CommonModule, HeadingComponent, LucideAngularModule],
})
export class CustomerComponent implements OnInit {


   icons = {
    Plus,ChevronRight
      };
  customerService = inject(CustomerService);
  CustomerData = signal<any[]>([]);
  searchQuery = signal<string>(''); 
  selectedCustomer = signal<any | null>(null);

openModal(customer: any) {
  this.selectedCustomer.set(customer);
}

closeModal() {
  this.selectedCustomer.set(null);
}
  ngOnInit() {
    this.customerService.customerList().subscribe((users: any[]) => {
      this.CustomerData.set(users);
      console.log('Current Data:', this.CustomerData());
    });
  }
  filteredCustomers = computed(() => {
  const query = this.searchQuery().toLowerCase();
  const data = this.CustomerData();
  
  if (!query) return data;
  
  return data.filter(c => 
    c.firstName.toLowerCase().includes(query) || 
    c.lastName.toLowerCase().includes(query) ||
    c.email.toLowerCase().includes(query)
  );
});

// Update your search handler
onSearch(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  this.searchQuery.set(value);
}
}
