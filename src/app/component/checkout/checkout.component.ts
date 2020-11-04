import { CheckoutService } from './../../service/checkout.service';
import { Component, OnInit } from '@angular/core';
import { Checkout } from 'src/app/model/checkout';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkouts: Checkout[];

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit(): void {
    this.checkoutService.getCheckouts()
      .subscribe((checkouts: Checkout[]) => {
        this.checkouts = checkouts;
      });
  }

}
