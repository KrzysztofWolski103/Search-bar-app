import { Component } from '@angular/core';
import { ServiceService } from './service/service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search Bar App';

  activeButton = true;

  constructor(public service:ServiceService) {}

  public loadSearchBar(){
    this.service.requestData();
    this.activeButton = false;
  }
}
