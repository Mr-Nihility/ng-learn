import { Component, Input } from '@angular/core';
import { Cat } from '../../interfaces/cat';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.css'
})
export class CatCardComponent {
  @Input()
  cat!: Cat;
}
