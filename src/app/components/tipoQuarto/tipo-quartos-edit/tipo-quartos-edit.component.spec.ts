import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoQuartosEditComponent } from './tipo-quartos-edit.component';

describe('TipoQuartosEditComponent', () => {
  let component: TipoQuartosEditComponent;
  let fixture: ComponentFixture<TipoQuartosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoQuartosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoQuartosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
