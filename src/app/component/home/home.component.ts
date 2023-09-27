import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  isImageEnlarged = false;

  enlargeImage() {
    this.isImageEnlarged = true;
  }

  resetImageSize() {
    this.isImageEnlarged = false;
  }
}
