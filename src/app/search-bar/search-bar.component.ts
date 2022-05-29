import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  text = "";
  suggestions: string[] = [];
  
  constructor( private service:ServiceService ) {}

  ngOnInit(): void {}

  // to zmiennej text zbieram to co zostanie napisane w inpucie (keyup)
  public sendData(e: any) {
    this.text = e.target.value;
    this.suggestions = [];
    this.includeCharacters();
  }

  // sugestie umieszczane sa w tablicy suggestions i wypisywane przez *ngFor
  public includeCharacters() {
    this.service.dataList.forEach(brand => {
      if( brand.includes(this.text) && !this.suggestions.includes(brand)) {
        this.suggestions.push(brand);
      }
    });
  }

  public chosenBrand(suggestion: string) {
    this.service.chosenBrand = suggestion;
  }

}
