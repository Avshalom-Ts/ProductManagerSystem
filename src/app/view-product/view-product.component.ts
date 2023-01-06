import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ProductData } from '../add-product/product.model';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss'],
})
export class ViewProductComponent implements OnInit {
  products: undefined | ProductData[] = [];
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.api.getProduct().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
  }
}
