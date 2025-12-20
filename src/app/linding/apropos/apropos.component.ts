import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-apropos',
  imports: [CommonModule],
  templateUrl: './apropos.component.html',
  styleUrl: './apropos.component.css'
})
export class AproposComponent {
  isCvModalOpen = false;
  cvPath = '/images/CV_Alaa_Ben_Salem_en.pdf';
  cvUrl: SafeResourceUrl;
  isMobile = false;

  constructor(private sanitizer: DomSanitizer) {
    this.cvUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.cvPath);
    this.checkIfMobile();
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
