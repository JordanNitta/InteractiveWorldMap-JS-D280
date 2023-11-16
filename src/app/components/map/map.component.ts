import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  countryInfo: any = {};

  countryData: any = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {

  }

  // On Click event
  countryClicked(event: MouseEvent) {
    const countryTarget = event.target as SVGElement;
    const countryId = countryTarget.id;

    console.log(countryId);
    this.countryService.getWorldBankInfo(countryId).subscribe((data) => {
      // Handle the data received from the service
      this.countryData = data[1][0]
      this.countryInfo = {
        "name": this.countryData.name,
        "capitalCity": this.countryData.capitalCity,
        "region": this.countryData.region.value,
        "incomeLevel": this.countryData.incomeLevel.value,
        "latitude": this.countryData.latitude,
        "longitude": this.countryData.longitude,
      }
      console.log(this.countryInfo)

    }, (error) => {
      console.log(error, 'Not working')
    });
  }

  // Search for country
  // searchCountry(event: Event): void {
  //   let search = (event.target as HTMLInputElement).value

  //   search = search.toLowerCase()

  //   this.countryService.getWorldBankInfo(search).subscribe((data) => {
  //     search = data
  //     console.log(search)
  //   }, (error) => {
  //     console.log(error, 'Error searching country')
  //   } )
  // }
}
