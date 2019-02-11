import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoQuartosAddComponent } from './tipo-quartos-add.component';

describe('TipoQuartosAddComponent', () => {
  let component: TipoQuartosAddComponent;
  let fixture: ComponentFixture<TipoQuartosAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoQuartosAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoQuartosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
