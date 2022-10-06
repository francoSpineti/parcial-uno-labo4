import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadorContainerComponent } from './listador-container.component';

describe('ListadorContainerComponent', () => {
  let component: ListadorContainerComponent;
  let fixture: ComponentFixture<ListadorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadorContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
