import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-magic-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
  ],
  templateUrl: './magic-form.component.html',
  styleUrl: './magic-form.component.sass',
})
export class MagicFormComponent {
  selectedValue: string = '';
  @Input() loading?: boolean;
  @Output()
  formSubmit = new EventEmitter<string[]>();

  onSubmit = (nome: string, bloco: string) => {
    const nameBlock = [nome, bloco];
    this.formSubmit.emit(nameBlock);
  };
}
