import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: 'light' | 'dark' = 'light';

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      // Détecte la préférence système
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = prefersDark ? 'dark' : 'light';
      // Sauvegarder le thème par défaut dans localStorage
      localStorage.setItem('theme', this.currentTheme);
    }
    
    this.applyTheme(this.currentTheme);
    console.log('Theme initialized:', this.currentTheme); // Pour debug
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('theme', this.currentTheme);
    console.log('Theme toggled to:', this.currentTheme); // Pour debug
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    const body = document.body;
    
    // Retirer toutes les classes de thème
    body.classList.remove('dark-theme', 'light-theme');
    
    // Ajouter la nouvelle classe
    if (theme === 'dark') {
      body.classList.add('dark-theme');
    } else {
      body.classList.add('light-theme');
    }
    
    console.log('Theme applied. Body classes:', body.className); // Pour debug
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }

  isDarkMode(): boolean {
    return this.currentTheme === 'dark';
  }
}
