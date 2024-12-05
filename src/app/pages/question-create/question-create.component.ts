import { Component } from '@angular/core';
import { MCreateComponent } from '../../components/q-create/q-create.component';

@Component({
  selector: 'app-question-create',
  standalone: true,
  imports: [MCreateComponent],
  templateUrl: './question-create.component.html',
  styleUrl: './question-create.component.scss',
})
export class QuestionCreateComponent {}
