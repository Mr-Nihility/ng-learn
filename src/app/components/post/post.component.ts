import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  post: any;
  @Input()
  user!: User;
  @Output()
  onCardBtnClick = new EventEmitter<User>()

  constructor(private http: HttpClient) {
    const steam$ = http.get('https://jsonplaceholder.typicode.com/posts')
    steam$.subscribe((value) => {
      console.log(value);
      this.post = value
    })
  }
  onClick(event: MouseEvent) {
    console.log("hey click event here ", event);
    this.onCardBtnClick.emit(this.user)
  }
}
