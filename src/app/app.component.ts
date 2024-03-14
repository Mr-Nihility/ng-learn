import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatsGridComponent } from "./components/cats-grid/cats-grid.component";
import { HeaderComponent } from "./components/header/header.component";
import { PostComponent } from './components/post/post.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, PostComponent, HeaderComponent, CatsGridComponent]
})
export class AppComponent {

}
