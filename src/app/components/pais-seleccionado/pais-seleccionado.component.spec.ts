import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisSeleccionadoComponent } from './pais-seleccionado.component';

describe('PaisSeleccionadoComponent', () => {
  let component: PaisSeleccionadoComponent;
  let fixture: ComponentFixture<PaisSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisSeleccionadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaisSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
