import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ImageService } from "../services/image.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{

  message:string;

  constructor(private data: ImageService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }
}
