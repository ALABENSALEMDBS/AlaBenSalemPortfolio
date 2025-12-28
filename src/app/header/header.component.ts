import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CvModalService } from '../services/cv-modal.service';
import { LanguageService } from '../services/serviceLang/language.service';
import { ThemeService } from '../services/theme.service';

interface WeatherData {
  temperature: number;
  weathercode: number;
}

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  menuActive = false;
  langMenuActive = false;
  currentLang: string;
  // currentLang = 'fr';
  currentDate = '';
  currentTime = '';
  weather: WeatherData | null = null;
  private timeInterval: any;




  constructor(
    private langService: LanguageService,
    private http: HttpClient,
    private cvModalService: CvModalService,
    private translate: TranslateService,
    public themeService: ThemeService
  ) {
    this.currentLang = this.langService.getCurrentLang();
  }


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
    
    const days = this.translate.instant('date.days');
    const months = this.translate.instant('date.months');

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

  openCvModal(): void {
    this.cvModalService.openCvModal();
    this.closeMenu();

      // Vérifie support navigateur
  if (!('speechSynthesis' in window)) return;

  // Stop lecture précédente
  window.speechSynthesis.cancel();

  // Récupère le texte traduit
  this.translate.get('about.Voir-mon-CV').subscribe(text => {
    const utterance = new SpeechSynthesisUtterance(text);

    // Langue automatique
    utterance.lang =
      this.translate.currentLang === 'fr' ? 'fr-FR' : 'en-US';

    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 0.5;

    window.speechSynthesis.speak(utterance);
  });
  }

  toggleLangMenu(): void {
    this.langMenuActive = !this.langMenuActive;
  }

  switchLanguage(lang: string): void {
    this.langService.use(lang);
    this.currentLang = lang;
    this.langMenuActive = false;
    this.updateDateTime(); // Mettre à jour la date avec la nouvelle langue
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
  