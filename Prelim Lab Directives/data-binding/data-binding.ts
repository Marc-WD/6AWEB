import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Interpolation
  studentName = "Marc O. Canlas";
  score = 95;

  // Property binding
  imageUrl = "https://cdn.mos.cms.futurecdn.net/BwL2586BtvBPywasXXtzwA-1000-80.jpeg";
  isDisabled = true;

  // Attribute binding
  colSpanValue = 3;

  // Class binding
  isPassing = true;

  // Style binding
  boxColor = "cyan";
  boxSize = "150px";
}
