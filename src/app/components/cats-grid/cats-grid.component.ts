import { AsyncPipe, JsonPipe, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Cat } from '../../interfaces/cat';
import { CatsApiServiceService } from '../../services/cats-api/cats-api-service.service';
import { CatCardComponent } from "../cat-card/cat-card.component";

@Component({
  selector: 'app-cats-grid',
  standalone: true,
  templateUrl: './cats-grid.component.html',
  styleUrl: './cats-grid.component.css',
  imports: [AsyncPipe, JsonPipe, CatCardComponent, NgClass]
})
export class CatsGridComponent implements OnInit {

  cats$: Observable<Cat[][]>
  constructor(private readonly catService: CatsApiServiceService) {
    this.cats$ = this.catService.getRandomCats().pipe(
      map((arr) => {
        const chunkSize = 5;
        const resultArray = [];

        for (let i = 0; i < arr.length; i += chunkSize) {
          resultArray.push(arr.slice(i, i + chunkSize));
        }
        return resultArray
      })
    )
  }

  async ngOnInit() {

  }


  getClassForContainer(even: boolean): string | string[] | Set<string> | { [x: string]: any; } | null | undefined {
    return {
      "reverse": !even,
      "grid-container": even
    }
  }

}
