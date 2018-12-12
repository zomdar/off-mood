import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageService } from "../services/image.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  message: string;

  constructor(private breakpointObserver: BreakpointObserver, private data: ImageService) {
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  imageNumber: number = 650;

  counter() {
    this.imageNumber+= 1;
  }

  newMessage() {
    this.counter()
    this.data.changeImage("https://picsum.photos/"+ this.imageNumber +"/?random")
  }

}
