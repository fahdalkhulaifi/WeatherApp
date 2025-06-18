import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WeatherApp';

  city: string = 'محافظة شبوة';
  data: any;

  constructor(private http: HttpClient) { }

 @ViewChild('contentDiv') contentDiv!: ElementRef<HTMLDivElement>;
  isContentEmpty = true;

  ngAfterViewInit() {
    const text = this.contentDiv.nativeElement.textContent?.trim();
    this.isContentEmpty = !text; // true if empty, false if has content
  }
  getWeather() {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=f00c38e0279b7bc85480c3fe775d518c&units=metric&lang=ar`;
    this.http.get(apiUrl).subscribe(result => {
      this.data = result;
    });
  }
}
