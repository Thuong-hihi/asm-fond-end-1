import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
id: string = ''
  constructor(private next : Router 
    ,private route: ActivatedRoute, 
    private productService: ProductsService,
     private form: FormBuilder)
      { }

  productForm = this.form.group({
    name: ['', [Validators.required]],
    price: ['', [Validators.required]],
    desc: ['', [Validators.required]],
    img: ['', [Validators.required]],
  })

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.getById(id).subscribe({
      next: (data) => {
      
        this.productForm.patchValue(data.data)
        this.id = data.data._id
      }
    })
  }

  handleSubmit() {
if(this.productForm.valid){
  this.productService.updateP(this.productForm.value , this.id).subscribe({
    next: () => {
      alert('Update thành công!')
      this.next.navigate(['admin'])
    }
  })
}
  }
}
