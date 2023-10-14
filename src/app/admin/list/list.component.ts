import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  searchText: string = "";
  products: any = []
  
  constructor(private productService: ProductsService) {
    this.productService.getAll().subscribe({
      next: (data) => { this.products = data.data },
      error: (error) => { console.log('error', error.message) },
      complete: () => { console.log('complete') }
    })
  }

  //Component được khởi tạo thì chạy vào ngOnInit đầu tiên
  ngOnInit(): void {
    this.getAllProduct()
  }
  getAllProduct(){
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data.data
      }
    })
  }

  removeProduct(id: number | string) {
    const confirm = window.confirm('Ban co chac chan muon xoa san pham');
    if(confirm) {
      this.productService.deleteP(id).subscribe({
        next: () => {
          alert('Xóa thành công !')
          //Load lại danh sách product
          this.getAllProduct()
        }
      })
    }
  }
}

