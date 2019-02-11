import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartosEditComponent } from './quartos-edit.component';

describe('QuartosEditComponent', () => {
  let component: QuartosEditComponent;
  let fixture: ComponentFixture<QuartosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
