import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../interfaces/question.interface';
import { TableKey } from '../../../types';
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent {
  router = inject(Router);
  questionService = inject(QuestionService);
  questions: Question[] = [];

  ngOnInit() {
    this.questionService.getQuestions().subscribe((result) => {
      this.questions = result;
    });
  }

  displayedColumns: TableKey[] = [
    {
      label: 'Id',
      key: 'id',
    },
    {
      label: 'Text',
      key: 'text',
    },
  ];
}
