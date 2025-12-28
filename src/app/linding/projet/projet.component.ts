import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projet',
  imports: [TranslateModule, RouterLink],
  templateUrl: './projet.component.html',
  styleUrl: './projet.component.css'
})
export class ProjetComponent {

}
