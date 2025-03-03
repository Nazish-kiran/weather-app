import { Component } from '@angular/core';
import { SearchCityComponent } from "./search-city/search-city.component";

@Component({
  selector: 'app-root',
  imports: [SearchCityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather-app';
}
