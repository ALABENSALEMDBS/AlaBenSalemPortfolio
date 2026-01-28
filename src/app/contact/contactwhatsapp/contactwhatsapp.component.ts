import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contactwhatsapp',
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contactwhatsapp.component.html',
  styleUrl: './contactwhatsapp.component.css'
})
export class ContactwhatsappComponent {
  formData = {
    fullName: '',
    email: '',
    phone: '',
    objectif: '',
    message: ''
  };

  touchedFields = {
    fullName: false,
    email: false,
    phone: false,
    objectif: false,
    message: false
  };

  objectifs = [
    { key: 'consultation', value: 'contactwhatsapp.objectifs.consultation' },
    { key: 'collaboration', value: 'contactwhatsapp.objectifs.collaboration' },
    { key: 'projetWeb', value: 'contactwhatsapp.objectifs.projetWeb' },
    { key: 'projetMobile', value: 'contactwhatsapp.objectifs.projetMobile' },
    { key: 'formation', value: 'contactwhatsapp.objectifs.formation' },
    { key: 'supportTechnique', value: 'contactwhatsapp.objectifs.supportTechnique' },
    { key: 'autre', value: 'contactwhatsapp.objectifs.autre' }
  ];

  whatsappNumber = '21628132996';

  constructor(private translate: TranslateService) {}

  markAsTouched(field: keyof typeof this.touchedFields): void {
    this.touchedFields[field] = true;
  }

  isFullNameValid(): boolean {
    return this.formData.fullName.trim().length >= 3;
  }

  isEmailValid(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isPhoneValid(): boolean {
    return this.formData.phone.trim().length >= 8;
  }

  isObjectifValid(): boolean {
    return this.formData.objectif !== '';
  }

  isMessageValid(): boolean {
    return this.formData.message.trim().length >= 10;
  }

  isFormValid(): boolean {
    return this.isFullNameValid() &&
           this.isEmailValid(this.formData.email) &&
           this.isPhoneValid() &&
           this.isObjectifValid() &&
           this.isMessageValid();
  }

  sendToWhatsApp(): void {
    if (!this.isFormValid()) {
      return;
    }

    const nameLabel = this.translate.instant('contactwhatsapp.whatsappLabels.name');
    const phoneLabel = this.translate.instant('contactwhatsapp.whatsappLabels.phone');
    const emailLabel = this.translate.instant('contactwhatsapp.whatsappLabels.email');
    const objectifLabel = this.translate.instant('contactwhatsapp.whatsappLabels.objectif');
    const messageLabel = this.translate.instant('contactwhatsapp.whatsappLabels.message');

    const message = `${nameLabel}: ${this.formData.fullName}
${phoneLabel}: ${this.formData.phone}
${emailLabel}: ${this.formData.email}
${objectifLabel}: ${this.formData.objectif}
${messageLabel}: ${this.formData.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Reset form after sending
    this.resetForm();
  }

  resetForm(): void {
    this.formData = {
      fullName: '',
      email: '',
      phone: '',
      objectif: '',
      message: ''
    };
    this.touchedFields = {
      fullName: false,
      email: false,
      phone: false,
      objectif: false,
      message: false
    };
  }
}
