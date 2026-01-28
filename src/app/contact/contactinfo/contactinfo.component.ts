import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contactinfo',
  imports: [TranslateModule, RouterLink],
  templateUrl: './contactinfo.component.html',
  styleUrl: './contactinfo.component.css'
})
export class ContactinfoComponent {

}
