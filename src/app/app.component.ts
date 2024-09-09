import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import { NaviComponent } from './components/navi/navi.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,RouterOutlet,RouterModule,
            CommonModule, NaviComponent, CategoryComponent, ProductComponent,
            HttpClientModule,CartSummaryComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'northwind';
  user: string = "Kadir Turan"
  
}
