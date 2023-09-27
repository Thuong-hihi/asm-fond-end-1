import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
 
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
    private productService: ProductService, // Sử dụng ProductService hoặc dịch vụ tương tự
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Trong phương thức ngOnInit, bạn có thể lấy thông tin sản phẩm từ ProductService hoặc dịch vụ tương tự
    this.route.params.subscribe(params => {
      const productId = +params['id']; // Lấy ID sản phẩm từ URL
      this.product = this.productService.getProductById(productId); // Gán giá trị sản phẩm
      console.log('Product:', this.product);
    });
  }
}
