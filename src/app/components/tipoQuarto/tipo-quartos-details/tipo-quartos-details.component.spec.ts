import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoQuartosDetailsComponent } from './tipo-quartos-details.component';

describe('TipoQuartosDetailsComponent', () => {
  let component: TipoQuartosDetailsComponent;
  let fixture: ComponentFixture<TipoQuartosDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoQuartosDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoQuartosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
