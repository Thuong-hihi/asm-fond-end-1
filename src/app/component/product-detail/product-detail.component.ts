import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
 
 // Import ProductService hoặc dịch vụ tương tự
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any; // Khai báo biến product

  constructor(
    private productService: ProductsService, // Sử dụng ProductService hoặc dịch vụ tương tự
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.getById(id).subscribe({
      next: (data) => {
        this.product = data.data
      }
    })
  }
}
