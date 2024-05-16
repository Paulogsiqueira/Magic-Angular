import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { AppComponent } from './app.component';
import { MagicDashboardComponent } from './magic-dashboard/magic-dashboard.component'; 

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>; 

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the subtitle text', () => {
    const subtitleText = fixture.nativeElement.querySelector('.body-subtitle');
    expect(subtitleText.textContent).toContain(
      'Monte seu deck e se prepare para a batalha'
    );
  });
  
  it('should render the logo image', () => {
    const logoImage = fixture.nativeElement.querySelector('img');
    expect(logoImage).toBeTruthy();
  });

});
