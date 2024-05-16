import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MagicLoadingComponent } from './magic-loading.component';

describe('MagicLoadingComponent', () => {
  let component: MagicLoadingComponent;
  let fixture: ComponentFixture<MagicLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the loading image', () => {
    const imgElement = fixture.nativeElement.querySelector('img');
    expect(imgElement).toBeTruthy();
    expect(imgElement.src).toContain('Loading.gif');
    expect(imgElement.alt).toBeTruthy();
  });

  it('should apply the magic-loading class to the div element', () => {
    const divElement = fixture.nativeElement.querySelector('div');
    expect(divElement.classList).toContain('magic-loading');
  });

});
