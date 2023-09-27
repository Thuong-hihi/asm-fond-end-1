import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  // productId: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Lấy ID từ đường dẫn
    this.route.params.subscribe(params => {
      // this.productId = +params['id']; // Chuyển đổi thành kiểu số
      
    });
  }
}
