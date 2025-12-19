import { Component } from '@angular/core';
import { AproposComponent } from "../apropos/apropos.component";

@Component({
  selector: 'app-home',
  imports: [AproposComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
