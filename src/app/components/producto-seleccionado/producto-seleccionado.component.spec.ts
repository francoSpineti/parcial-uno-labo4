import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoSeleccionadoComponent } from './producto-seleccionado.component';

describe('ProductoSeleccionadoComponent', () => {
  let component: ProductoSeleccionadoComponent;
  let fixture: ComponentFixture<ProductoSeleccionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoSeleccionadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoSeleccionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
