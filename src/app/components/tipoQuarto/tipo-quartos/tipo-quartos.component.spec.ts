import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoQuartosComponent } from './tipo-quartos.component';

describe('TipoQuartosComponent', () => {
  let component: TipoQuartosComponent;
  let fixture: ComponentFixture<TipoQuartosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoQuartosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoQuartosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
