import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { IProduct } from 'src/app/component/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { lastValueFrom } from 'rxjs' 
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  productForm = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    price: ['', [Validators.required]],
    desc: ['', [Validators.required]],
    img: ['', [Validators.required]],
    
  });
  product!: IProduct;
 

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router
    ) { }


  async onHandleSubmit() {
    if (this.productForm.invalid) return;
     {
      try {
        await lastValueFrom(this.productService.createP(this.productForm.value as IProduct))
        alert('Thêm thành công');
        
        this.router.navigate(['/admin']);
      } catch (error: any) {
        console.log(error.message)
      }
      
    }
   
  }

}

