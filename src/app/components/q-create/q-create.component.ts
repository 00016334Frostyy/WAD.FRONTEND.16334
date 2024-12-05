import { Component, Input, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  Question,
  QuestionCreate,
} from '../../../interfaces/question.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { SurveyService } from '../../../services/survey.service';
import { Survey } from '../../../interfaces/survey.interface';

@Component({
  selector: 'app-q-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
  ],
  templateUrl: './q-create.component.html',
  styleUrl: './q-create.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class MCreateComponent {
  @Input()
  questionDetail!: Question;

  @Input()
  isEdit: boolean = false;

  router = inject(Router);
  questionService = inject(QuestionService);
  surveyService = inject(SurveyService);
  activatedRoute = inject(ActivatedRoute);

  createQuestion: QuestionCreate = {
    text: '',
    surveyId: null,
  };
  errorObj: any;
  surveys: Survey[] = [];
  surveyId: number | null = 0;

  ngOnInit() {
    this.surveyService.getSurveys().subscribe((result) => {
      this.surveys = result;
    });
  }

  ngOnChanges() {
    this.createQuestion = this.questionDetail;
    this.surveyId = this.createQuestion.surveyId;
  }

  clearForm() {
    this.createQuestion = {
      text: '',
      surveyId: null,
    };
  }

  submitForm() {
    this.createQuestion.surveyId = this.surveyId;
    if (this.isEdit) {
      this.questionService
        .updateQuestion(
          this.activatedRoute.snapshot.params['id'],
          this.createQuestion
        )
        .subscribe(
          (_) => {
            alert('Question Updated');
            this.router.navigateByUrl('question');
          },
          (error) => {
            this.errorObj = error.error.errors;
          }
        );
    } else {
      this.questionService.createQuestion(this.createQuestion).subscribe(
        (_) => {
          alert('Question created');
          this.router.navigateByUrl('question');
        },
        (error) => {
          this.errorObj = error.error.errors;
        }
      );
    }
  }
}
