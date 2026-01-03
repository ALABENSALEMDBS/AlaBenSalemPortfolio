import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { AproposComponent } from "../apropos/apropos.component";
import { CompetanceComponent } from "../competance/competance.component";
import { CertificationComponent } from "../certification/certification.component";
import { HeropageComponent } from "../heropage/heropage.component";
import { SkillsComponent } from "../skills/skills.component";
import { ProjetComponent } from "../projet/projet.component";
import { StudiesComponent } from "../studies/studies.component";

@Component({
  selector: 'app-home',
  imports: [AproposComponent, CertificationComponent, HeropageComponent, SkillsComponent, ProjetComponent, StudiesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
