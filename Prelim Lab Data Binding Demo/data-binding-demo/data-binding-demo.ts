import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  imports: [FormsModule],
  templateUrl: './data-binding-demo.html',
  styleUrl: './data-binding-demo.css',
})
export class DataBindingDemo {
  message = 'Data Binding Demonstration';
  title = 'My First App!';
  description = 'This is my new Angular Application';

  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/6/67/Angular_gradient_logo.png';
  w = 500;
  h = 500;
  altText = 'Angular Logo';
  textColor = 'blue';
  isHighlighted = true;
  yourName = '';

  count= 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
}

