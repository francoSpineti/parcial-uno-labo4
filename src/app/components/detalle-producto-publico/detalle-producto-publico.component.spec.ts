import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProductoPublicoComponent } from './detalle-producto-publico.component';

describe('DetalleProductoPublicoComponent', () => {
  let component: DetalleProductoPublicoComponent;
  let fixture: ComponentFixture<DetalleProductoPublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleProductoPublicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleProductoPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
