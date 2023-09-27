import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any = []

  constructor(private router: Router, private productS: ProductService) { 
    this.productS.getAll().subscribe({
      next: (data) => {
        console.log(data)
      }
    })
  }

  ngOnInit(): void {
   
  }


  navigateToProductDetail(productId: number) {
    this.router.navigate(['/product-detail', productId]);
  }
}
