import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-city',
  imports: [FormsModule],
  templateUrl: './search-city.component.html',
  styleUrl: './search-city.component.css',
})
export class SearchCityComponent {
  apiKey: string = '486c6b068c5f2d8281c86fbdd28e5791';
  city!: string;
  weatherData: any = null;
  sendCity() {
    console.log(this.city);
    this.city = '';
    fetch(
      `https://fakestoreapi.com/products`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.weatherData = data;
        console.log(this.weatherData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
