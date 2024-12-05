import { Component, inject } from '@angular/core';
import { MCreateComponent } from '../../components/q-create/q-create.component';
import { Question } from '../../../interfaces/question.interface';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-question-edit',
  standalone: true,
  imports: [MCreateComponent],
  templateUrl: './question-edit.component.html',
  styleUrl: './question-edit.component.scss',
})
export class QuestionEditComponent {
  questionDetail: Question = {
    id: 0,
    text: '',
    surveyId: null,
    survey: null,
  };

  activatedRoute = inject(ActivatedRoute);
  questionService = inject(QuestionService);

  ngOnInit() {
    this.questionService
      .getQuestion(this.activatedRoute.snapshot.params['id'])
      .subscribe((question) => {
        this.questionDetail = question;
      });
  }
}
