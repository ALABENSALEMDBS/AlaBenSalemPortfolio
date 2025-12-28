import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { LanguageService } from './services/serviceLang/language.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private langService: LanguageService) {}

  title = 'AlaBenSalemPortfolio';

  ngOnInit(): void {
    // Attendre que le DOM soit complètement chargé
    setTimeout(() => {
      this.initCustomCursor();
    }, 100);
  }

  // Initialisation du curseur personnalisé
  private initCustomCursor(): void {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const cursorFollower = document.querySelector('.cursor-follower') as HTMLElement;

    if (!cursor || !cursorFollower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    // Suivre la position de la souris
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    });

    // Animation du follower avec un délai
    const animateFollower = () => {
      const distX = mouseX - followerX;
      const distY = mouseY - followerY;

      followerX += distX * 0.1;
      followerY += distY * 0.1;

      cursorFollower.style.left = followerX + 'px';
      cursorFollower.style.top = followerY + 'px';

      requestAnimationFrame(animateFollower);
    };
    animateFollower();

    // Observer pour les nouveaux éléments ajoutés dynamiquement
    this.attachHoverEffects();

    // MutationObserver pour détecter les nouveaux éléments
    const observer = new MutationObserver(() => {
      this.attachHoverEffects();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private attachHoverEffects(): void {
    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const cursorFollower = document.querySelector('.cursor-follower') as HTMLElement;

    if (!cursor || !cursorFollower) return;

    const interactiveElements = document.querySelectorAll('a, button, .btn, .social-link, .cv-button, .project-button, input, textarea, select');

    interactiveElements.forEach((el) => {
      // Vérifier si l'élément a déjà l'événement attaché
      if (el.hasAttribute('data-cursor-attached')) return;
      el.setAttribute('data-cursor-attached', 'true');

      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
        cursorFollower.classList.add('hover');
      });

      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
        cursorFollower.classList.remove('hover');
      });
    });
  }

}
