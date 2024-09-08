import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cartItem';
import { CartItems } from '../../models/cartItems';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import {  ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit{

  cartItems:CartItem[] = []
  
  constructor(private cartService:CartService,
    private toastrService:ToastrService
  ){}

  ngOnInit():void{
    this.getCart()
  }

  getCart(){
    this.cartItems = this.cartService.list()
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product)
    this.toastrService.success("Silindi",product.productName + "Sepetten silindi")
  }

}
