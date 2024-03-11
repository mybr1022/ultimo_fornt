import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoMensajeroPage } from './nuevo-mensajero.page';

describe('NuevoMensajeroPage', () => {
  let component: NuevoMensajeroPage;
  let fixture: ComponentFixture<NuevoMensajeroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoMensajeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
