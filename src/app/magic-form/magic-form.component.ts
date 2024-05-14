import {Component, EventEmitter, Output} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import axios from 'axios'
import { Booster } from '../magic-dashboard/magic-dashboard.component';

@Component({
  selector: 'app-magic-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule,CommonModule, MatSelectModule,MatButtonModule,FormsModule],
  templateUrl: './magic-form.component.html',
  styleUrl: './magic-form.component.sass'
})
export class MagicFormComponent {
  selectedValue: string = '';
  @Output()
  formSubmit = new EventEmitter<Booster[]>()

  onSubmit= async (nome: string, bloco: string) =>{
    const boostersList = await this.getBoosters(nome,bloco)
    console.log(boostersList)
    this.formSubmit.emit(boostersList)
  }

  getBoosters = async (nome: string, bloco: string) => {
    try {
      const response = await axios.get(`https://api.magicthegathering.io/v1/sets?name=${nome}&block=${bloco}`);
      const boosters = response.data.sets
      return boosters
    } catch (error) {
      console.error("Erro ao processar a solicitação:", error);
      throw error;
    }
  }

}
