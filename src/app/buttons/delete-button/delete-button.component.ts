import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.sass'
})
export class DeleteButtonComponent {

}
