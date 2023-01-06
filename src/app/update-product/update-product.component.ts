import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductData } from '../add-product/product.model';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss'],
})
export class UpdateProductComponent implements OnInit {
  dataId: any;
  public product: ProductData = {};
  constructor(
    private api: ApiService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((param: Params) => {
      this.dataId = param['get']('id');
      // console.log(`Id is : ${this.dataId}`);
    });
    this.api.getProductById(this.dataId).subscribe((data: any) => {
      this.product = data;
      // console.log(this.product);
    });
  }

  update() {
    this.api
      .updateProduct(this.product, this.dataId)
      .subscribe((data: ProductData) => {
        // console.log(data);
        this.router.navigate(['/view-product']);
      });
  }
}
