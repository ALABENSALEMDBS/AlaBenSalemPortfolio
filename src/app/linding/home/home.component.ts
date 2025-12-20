import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { AproposComponent } from "../apropos/apropos.component";
import { CompetanceComponent } from "../competance/competance.component";
import { CertificationComponent } from "../certification/certification.component";

@Component({
  selector: 'app-home',
  imports: [AproposComponent, CompetanceComponent, CertificationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const sections = this.elementRef.nativeElement.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach((section: Element) => {
      observer.observe(section);
    });
  }
}
