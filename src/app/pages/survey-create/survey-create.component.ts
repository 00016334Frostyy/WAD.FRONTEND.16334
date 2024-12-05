import { Component } from '@angular/core';
import { CCreateComponent } from '../../components/s-create/s-create.component';

@Component({
  selector: 'app-survey-create',
  standalone: true,
  imports: [CCreateComponent],
  templateUrl: './survey-create.component.html',
  styleUrl: './survey-create.component.scss',
})
export class SurveyCreateComponent {}
