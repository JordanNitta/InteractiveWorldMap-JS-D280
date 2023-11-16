import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country.service';
@Component({
  selector: 'app-map-card',
  templateUrl: './map-card.component.html',
  styleUrls: ['./map-card.component.css']
})
export class MapCardComponent implements OnInit {
  @Input() countryInfo: any = {};

  

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  

}
