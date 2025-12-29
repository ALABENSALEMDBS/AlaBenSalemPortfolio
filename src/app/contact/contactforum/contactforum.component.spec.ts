import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactforumComponent } from './contactforum.component';

describe('ContactforumComponent', () => {
  let component: ContactforumComponent;
  let fixture: ComponentFixture<ContactforumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactforumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactforumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
