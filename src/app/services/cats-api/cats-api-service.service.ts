import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../../interfaces/cat';

@Injectable({
  providedIn: 'root'
})
export class CatsApiServiceService {
  private readonly API_KEY = "live_lZBVMvgPbXQoh1HHAUHFdLvXf2eslOeJkVK22z9WhFy1cbGJyhJrapYERTgvBsua";
  BASE_URL = "https://api.thecatapi.com/v1"
  constructor(protected httpClient: HttpClient) { }

  getRandomCats(): Observable<Cat[]> {
    return this.httpClient.get(`${this.BASE_URL}/images/search?limit=20`, {
      headers: {
        'x-api-key': this.API_KEY
      }
    }) as Observable<Cat[]>
  }
}
