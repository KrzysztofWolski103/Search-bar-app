import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  // tutaj wczytam liste marek z pliku data.json
  public dataList: string[] = [];

  // wybrana marka z autocomplete listy
  public chosenBrand: string = "";

  private _file: string = "./assets/data.json";

  constructor(private http: HttpClient) {}

  // pobieranie danych z pliku .json do tablicy
  public requestData(){
    try {
      this.http.get(this._file, { responseType: 'text' }).subscribe((data) => {
        let jsonData = JSON.parse(data);

        for(let i=0; i<jsonData["results"].length; i++) {
          let brand = jsonData["results"][i]["brand"];
          this.dataList.push(brand);
        }
      });
    } catch (err) {
      console.log("Error from GET requestData() in service");
    }
  }

}
