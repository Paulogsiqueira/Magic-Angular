import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MagicBoosterComponent } from './magic-booster.component';
import { MatButtonModule } from '@angular/material/button';

describe('DeleteButtonComponent', () => {
  let component: MagicBoosterComponent;
  let fixture: ComponentFixture<MagicBoosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatButtonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicBoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the booster name', () => {
    component.booster = {
      name: 'Name',
      block: 'Block',
      releaseDate: 'Release',
      code: '123',
    };
    fixture.detectChanges();
    const nameElement = fixture.nativeElement.querySelector('h2');
    expect(nameElement.textContent).toContain('Name');
  });

  it('should render the booster block', () => {
    component.booster = {
      name: 'Name',
      block: 'Block',
      releaseDate: 'Release',
      code: '123',
    };
    fixture.detectChanges();
    const blockElement = fixture.nativeElement.querySelector(
      '.magic-boster__block'
    );
    expect(blockElement.textContent).toContain('Block');
  });

  it('should render the booster release date', () => {
    component.booster = {
      name: 'Name',
      block: 'Block',
      releaseDate: 'Release',
      code: '123',
    };
    fixture.detectChanges();
    const dateElement = fixture.nativeElement.querySelector(
      '.magic-boster__date p'
    );
    expect(dateElement.textContent).toContain('Release');
  });

  it('should emit the booster code when clicked', () => {
    spyOn(component, 'boosterChoiced');
    component.booster = {
      name: 'Name',
      block: 'Block',
      releaseDate: 'Release',
      code: '123',
    };
    fixture.detectChanges();
    const boosterElement =
      fixture.nativeElement.querySelector('.magic-booster');
    boosterElement.click();
    expect(component.boosterChoiced).toHaveBeenCalledWith('123');
  });
});
