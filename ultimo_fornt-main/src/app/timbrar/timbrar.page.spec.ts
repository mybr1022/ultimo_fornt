import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimbrarPage } from './timbrar.page';

describe('TimbrarPage', () => {
  let component: TimbrarPage;
  let fixture: ComponentFixture<TimbrarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TimbrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
