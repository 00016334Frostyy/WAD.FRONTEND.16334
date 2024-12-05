import { Component, Input } from '@angular/core';
import { Survey } from '../../../interfaces/survey.interface';
import { Question } from '../../../interfaces/question.interface';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  @Input()
  detail: any;

  @Input()
  title: string = '';

  detailIter: any;
  description: string = '';
  surveyIter!: any;
  surveyDesc: string = '';

  ngOnChanges() {
    this.detailIter = Object.entries(this.detail);
    if (this.detail && this.detail.survey) {
      this.surveyIter = Object.entries(this.detail.survey);
      this.surveyDesc = this.detail.description;
    }
  }
}
