import { MagicFormComponent } from './magic-form.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MagicFormComponent', () => {
  let component: MagicFormComponent;
  let fixture: ComponentFixture<MagicFormComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicFormComponent);
    component = fixture.componentInstance;
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the button text', () => {
    const button = fixture.nativeElement.querySelector('.form-field__button');
    expect(button.textContent).toContain('Buscar');
  });

});
