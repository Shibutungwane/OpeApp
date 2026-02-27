import { Component, inject, OnInit, signal } from '@angular/core';
import { HeadingComponent } from '../Heading/Heading.component';
import { ProductService } from './Product.service';
import { LucideAngularModule,ChevronRight,Plus,ShoppingCart,} from "lucide-angular";
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css'],
  imports: [HeadingComponent, LucideAngularModule,CurrencyPipe],

})
export class ProductComponent implements OnInit {
  constructor() {}
  icons = {
    ChevronRight,Plus,ShoppingCart
  }

  productService = inject(ProductService);
  productData = signal<any[]>([]);

  ngOnInit() {
    this.productService.productList().subscribe((product: any) => {
      this.productData.set(product);
      console.log('Product Data Here', this.productData());
    });
  }
}
