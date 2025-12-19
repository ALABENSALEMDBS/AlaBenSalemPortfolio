import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';

interface WeatherData {
  temperature: number;
  weathercode: number;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuActive = false;
  currentLang = 'fr';
  currentDate = '';
  currentTime = '';
  weather: WeatherData | null = null;
  private timeInterval: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.updateDateTime();
    this.getWeather();
    this.timeInterval = setInterval(() => {
      this.updateDateTime();
    }, 1000);
    
    // Mettre à jour la météo toutes les 10 minutes
    setInterval(() => {
      this.getWeather();
    }, 600000);
  }

  ngOnDestroy(): void {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  private updateDateTime(): void {
    const now = new Date();
    
    const days = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
    const months = [
      'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
      'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];

    const dayName = days[now.getDay()];
    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    this.currentDate = `${dayName} ${day} ${month} ${year}`;
    this.currentTime = `${hours}:${minutes}`;
  }

  private getWeather(): void {
    const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=36.8065&longitude=10.1815&current_weather=true';
    
    this.http.get<any>(apiUrl).subscribe({
      next: (data) => {
        if (data.current_weather) {
          this.weather = {
            temperature: data.current_weather.temperature,
            weathercode: data.current_weather.weathercode
          };
        }
      },
      error: (error) => {
        console.error('Erreur lors de la récupération de la météo:', error);
      }
    });
  }

  getWeatherIcon(code: number): string {
    // WMO Weather interpretation codes
    if (code === 0) return '☀️'; // Clear sky
    if (code <= 3) return '⛅'; // Partly cloudy
    if (code <= 48) return '☁️'; // Foggy
    if (code <= 67) return '🌧️'; // Rain
    if (code <= 77) return '❄️'; // Snow
    if (code <= 82) return '🌦️'; // Rain showers
    if (code <= 86) return '🌨️'; // Snow showers
    if (code <= 99) return '⛈️'; // Thunderstorm
    return '☀️';
  }

  toggleMenu(): void {
    this.menuActive = !this.menuActive;
  }

  closeMenu(): void {
    this.menuActive = false;
  }

  switchLanguage(lang: string): void {
    this.currentLang = lang;
    // Ici vous pouvez ajouter la logique pour changer la langue de l'application
    console.log('Langue changée vers:', lang);
    // Exemple: this.translateService.use(lang);
  }
}
