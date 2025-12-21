import { Component } from '@angular/core';

@Component({
  selector: 'app-heropage',
  imports: [],
  templateUrl: './heropage.component.html',
  styleUrl: './heropage.component.css'
})
export class HeropageComponent {

  scrollToNextSection() {
    const aboutSection = document.getElementById('aboutapropos');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
