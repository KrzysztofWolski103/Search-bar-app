import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.css']
})
export class BrandPageComponent implements OnInit {


  brand: string = "";
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      if(typeof param['brand'] !== 'undefined') {
          this.brand = param['brand'];
          // modyfikacje nazwy do wyswietlenia: audi-> Audi, alfa-romeo -> Alfa Romeo
          if(!this.brand.includes('-')) {
            this.brand = this.brand.charAt(0).toUpperCase() + this.brand.slice(1);
          } else {
            let splittedName = this.brand.split('-');
            this.brand = "";
            for(let i=0; i<splittedName.length; i++) {
              this.brand += splittedName[i].charAt(0).toUpperCase() + splittedName[i].slice(1) + ' ';
            }
          }
      } else {
        this.brand = "";
      }
  });
  }

}
