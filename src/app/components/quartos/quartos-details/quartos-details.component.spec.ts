import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartosDetailsComponent } from './quartos-details.component';

describe('QuartosDetailsComponent', () => {
  let component: QuartosDetailsComponent;
  let fixture: ComponentFixture<QuartosDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartosDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
