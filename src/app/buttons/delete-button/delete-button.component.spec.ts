import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteButtonComponent } from './delete-button.component';
import { MatButtonModule } from '@angular/material/button';

describe('DeleteButtonComponent', () => {
  let component: DeleteButtonComponent;
  let fixture: ComponentFixture<DeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a delete button', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(
      'Substituir Cartas'
    );
  });

  it('should emit an event when the button is clicked', () => {
    let clicked = false;
    component.deleteSelectedCardsEvent.subscribe(() => {
      clicked = true;
    });
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(clicked).toBe(true);
  });
});
