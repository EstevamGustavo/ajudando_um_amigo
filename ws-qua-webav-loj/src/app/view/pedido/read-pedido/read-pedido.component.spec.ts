import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadPedidoComponent } from './read-pedido.component';

describe('ReadPedidoComponent', () => {
  let component: ReadPedidoComponent;
  let fixture: ComponentFixture<ReadPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
