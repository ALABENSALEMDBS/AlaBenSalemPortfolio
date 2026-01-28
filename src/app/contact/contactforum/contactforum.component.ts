import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactinfoComponent } from "../contactinfo/contactinfo.component";
import { ContactwhatsappComponent } from "../contactwhatsapp/contactwhatsapp.component";

@Component({
  selector: 'app-contactforum',
  imports: [ContactinfoComponent, ContactwhatsappComponent],
  templateUrl: './contactforum.component.html',
  styleUrl: './contactforum.component.css'
})
export class ContactforumComponent {

}
