import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private messageSource = new BehaviorSubject("https://picsum.photos/650/?random");
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeImage(message: string) {
    this.messageSource.next(message)
  }

}