import { Component } from '@angular/core';
import { ProductService } from 'src/app/component/services/product.service';
import { IProduct } from 'src/app/component/interfaces/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products:Array<any> =[
    {
      "name": "Tinh dầu bưởi",
      "price": 200,
      "id": 1,
      "images":"assets/img/3.jpg"
    },
    {
      "id": 2,
      "name": "Nước tẩy trang",
      "price": 300,
      "images":"assets/img/4.jpg"
    },
    {
      "name":"Gel tắm khung diệp và  bạc hà",
      "price": 1200,
      "id": 3,
      "images":"assets/img/5.jpg"
    }
    ,
    {
      "name": "Bơ dưỡng thể",
      "price": 1500,
      "id": 4,
      "images":"assets/img/6.jpg"
    }
    ,
    {
      "name": "Đường thốt nốt làm sạch cơ thể",
      "price": 300,
      "id": 5,
      "images":"assets/img/7.jpg"
    },
    
    
    // {

    //   "name": "Gel bí đao làm sạch mặt",
    //   "price": 500,
    //   "id": 6,
    //   "images":"assets/img/8.jpg"
    // },
    // ,
    // {
    //   "name": "Son dưỡng dừa",
    //   "price": 300,
    //   "id": 7,
    //   "images":"assets/img/9.jpg"
    // },
    // ,
    // {
    //   "name": "Đường thốt nốt làm sạch cơ thể",
    //   "price": 300,
    //   "id": 8,
    //   "images":"assets/img/14.webp"
    // }


  ]
  searchText: string = "";
  
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => { this.products = data },
      error: (error) => { console.log('error', error.message) },
      complete: () => { console.log('complete') }
    })
  }

  removeProduct(id: number | string) {
    const confirm = window.confirm('Ban co chac chan muon xoa san pham');
    if (confirm) this.products = this.products.filter(item => item.id != id);
  }
  onHandleRemove(id: any) {
    console.log(id);
    // 
  }
}

