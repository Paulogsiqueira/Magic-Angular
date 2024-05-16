import { MagicDashboardComponent } from './magic-dashboard.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('MagicDashboardComponent', () => {
  let component: MagicDashboardComponent;
  let fixture: ComponentFixture<MagicDashboardComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicDashboardComponent);
    component = fixture.componentInstance;
  });
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});


