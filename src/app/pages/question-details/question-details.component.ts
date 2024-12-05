import { Component, inject } from '@angular/core';
import { DetailComponent } from '../../components/detail/detail.component';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../interfaces/question.interface';

@Component({
  selector: 'app-question-details',
  standalone: true,
  imports: [DetailComponent],
  templateUrl: './question-details.component.html',
  styleUrl: './question-details.component.scss',
})
export class QuestionDetailsComponent {
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
