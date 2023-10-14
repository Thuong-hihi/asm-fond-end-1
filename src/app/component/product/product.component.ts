import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any = []
  constructor(private router: Router, private productS: ProductsService) { }

  ngOnInit(): void {
    this.productS.getAll().subscribe({
      next: (data) => {
        this.products = data.data
      }
    })
  }


  navigateToProductDetail(productId: number) {
    this.router.navigate(['/product-detail', productId]);
  }
}
