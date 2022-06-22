import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadUsuarioComponent } from './read-usuario.component';

describe('ReadUsuarioComponent', () => {
  let component: ReadUsuarioComponent;
  let fixture: ComponentFixture<ReadUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
