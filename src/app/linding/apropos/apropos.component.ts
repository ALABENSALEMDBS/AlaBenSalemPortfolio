import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-apropos',
  imports: [CommonModule],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent implements OnInit, OnDestroy {
  isCvModalOpen = false;
  cvPath = '/images/CV_Alaa_Ben_Salem_en.pdf';
  cvUrl: SafeResourceUrl;
  isMobile = false;
  private observer!: IntersectionObserver;

  constructor(private sanitizer: DomSanitizer, private elementRef: ElementRef) {
    this.cvUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.cvPath);
    this.checkIfMobile();
  }

  ngOnInit() {
    this.setupScrollAnimations();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupScrollAnimations() {
    const options = {
      root: null,
      threshold: 0.5,
      rootMargin: '0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, options);

    const elementsToAnimate = this.elementRef.nativeElement.querySelectorAll(
      '.about-header, .about-image-wrapper, .about-text, .motivation-text'
    );

    elementsToAnimate.forEach((el: Element) => {
      this.observer.observe(el);
    });
  }



  checkIfMobile() {
    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  openCvModal() {
    this.isCvModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeCvModal() {
    this.isCvModalOpen = false;
    document.body.style.overflow = 'auto';
  }
}
