import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CvModalService {
  private cvModalState = new BehaviorSubject<boolean>(false);
  cvModalState$ = this.cvModalState.asObservable();

  openCvModal() {
    this.cvModalState.next(true);
    document.body.style.overflow = 'hidden';
  }

  closeCvModal() {
    this.cvModalState.next(false);
    document.body.style.overflow = 'auto';
  }
}
