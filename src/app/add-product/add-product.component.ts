import { Component } from '@angular/core';
import { ProductData } from './product.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  constructor(private api: ApiService, private router: Router) {}

  addData(data: ProductData) {
    // console.log(data);
    this.api.addProduct(data).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/view-product']);
    });
  }
}
