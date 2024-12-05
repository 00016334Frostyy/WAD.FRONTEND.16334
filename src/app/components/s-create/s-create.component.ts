import { Component, Input, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyService } from '../../../services/survey.service';
import { Survey, SurveyCreate } from '../../../interfaces/survey.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-s-create',
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
  templateUrl: './s-create.component.html',
  styleUrl: './s-create.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class CCreateComponent {
  @Input()
  surveyDetail!: Survey;

  @Input()
  isEdit: boolean = false;

  router = inject(Router);
  surveyService = inject(SurveyService);
  activatedRoute = inject(ActivatedRoute);

  createSurvey: SurveyCreate = {
    title: '',
    description: '',
    createdDate: '',
  };
  errorObj: any;

  ngOnChanges() {
    this.createSurvey = this.surveyDetail;
  }

  clearForm() {
    this.createSurvey = {
      title: '',
      description: '',
      createdDate: '',
    };
  }

  submitForm() {
    if (this.isEdit) {
      this.surveyService
        .updateSurvey(
          this.activatedRoute.snapshot.params['id'],
          this.createSurvey
        )
        .subscribe(
          (_) => {
            alert('Survey Updated');
            this.router.navigateByUrl('survey');
          },
          (error) => {
            this.errorObj = error.error.errors;
          }
        );
    } else {
      this.surveyService.createSurvey(this.createSurvey).subscribe(
        (_) => {
          alert('Survey created');
          this.router.navigateByUrl('survey');
        },
        (error) => {
          this.errorObj = error.error.errors;
        }
      );
    }
  }
}
