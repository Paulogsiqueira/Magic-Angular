import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MagicDashboardComponent } from './magic-dashboard/magic-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MagicDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-magic';
}
