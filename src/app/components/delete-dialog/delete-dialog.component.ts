import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { QuestionService } from '../../../services/question.service';
import { SurveyService } from '../../../services/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss',
})
export class DeleteDialogComponent {
  router = inject(Router);
  questionService = inject(QuestionService);
  surveyService = inject(SurveyService);
  id: number;
  tableName: string = '';
  constructor(
    private _mdr: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { id: number; tableName: string }
  ) {
    this.id = data.id;
    this.tableName = data.tableName;
  }
  cancelTask() {
    this._mdr.close(false);
  }

  refreshPage() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([this.tableName]);
    });
  }

  deleteTask() {
    if (this.tableName === 'question') {
      this.questionService.deleteQuestion(this.id).subscribe((_) => {
        this.refreshPage();
      });
    }
    if (this.tableName === 'survey') {
      this.surveyService.deleteSurvey(this.id).subscribe((_) => {
        this.refreshPage();
      });
    }
    this._mdr.close(false);
  }
}
