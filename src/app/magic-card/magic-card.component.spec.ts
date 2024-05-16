import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MagicCardComponent } from './magic-card.component';
import { MatButtonModule } from '@angular/material/button';

describe('DeleteButtonComponent', () => {
  let component: MagicCardComponent;
  let fixture: ComponentFixture<MagicCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the card name', () => {
    component.card = {name:'Name',imageUrl:'image.jpg',manaCost:'{W}',text:'Text',types:['Type1','Type2'],colorIdentity:['Color','Identity']};
    fixture.detectChanges();
    const nameElement = fixture.nativeElement.querySelector('h2');
    expect(nameElement.textContent).toContain('Name');
  });
  
  it('should render the card image', () => {
    component.card = {name:'Name',imageUrl:'image.jpg',manaCost:'{W}',text:'Text',types:['Type1','Type2'],colorIdentity:['Color','Identity']};
    fixture.detectChanges();
    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toContain('image.jpg');
  });
  
  it('should apply the selected class when cardSelected is true', () => {
    component.cardSelected = true;
    fixture.detectChanges();
    const cardElement = fixture.nativeElement.querySelector('.magic-card');
    expect(cardElement.classList).toContain('selected');
  });
  
  it('should not apply the selected class when cardSelected is false', () => {
    component.cardSelected = false;
    fixture.detectChanges();
    const cardElement = fixture.nativeElement.querySelector('.magic-card');
    expect(cardElement.classList).not.toContain('selected');
  });

});
