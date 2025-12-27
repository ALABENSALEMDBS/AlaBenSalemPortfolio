import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private supportedLangs = ['en', 'fr'];
  private defaultLang = 'fr';

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  private initLanguage() {
    this.translate.addLangs(this.supportedLangs);
    this.translate.setDefaultLang(this.defaultLang);

    const savedLang = localStorage.getItem('lang');
    
    // Utiliser la langue sauvegardée si elle existe, sinon utiliser FR par défaut
    if (savedLang && this.supportedLangs.includes(savedLang)) {
      this.use(savedLang);
    } else {
      this.use(this.defaultLang);
    }
  }

  use(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }

  getCurrentLang(): string {
    return this.translate.currentLang || this.defaultLang;
  }

  getLanguages(): string[] {
    return this.supportedLangs;
  }

}
