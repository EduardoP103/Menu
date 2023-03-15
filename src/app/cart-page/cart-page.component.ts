import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  constructor(private cartService: CartService){ }

  setCart(){
    this.cart = this.cartService.getCart();
  }
  ngOnInit(): void {

  }

}
