import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  score!: number;
  gradeResult!: string;

  calculateGrade() {
    if (this.score >= 80) {
      this.gradeResult = 'A';
    } else if (this.score >= 75) {
      this.gradeResult = 'B+';
    } else if (this.score >= 70) {
      this.gradeResult = 'B';
    } else if (this.score >= 65) {
      this.gradeResult = 'C+';
    } else if (this.score >= 60) {
      this.gradeResult = 'C';
    } else if (this.score >= 55) {
      this.gradeResult = 'D+';
    } else if (this.score >= 50) {
      this.gradeResult = 'D';
    } else {
      this.gradeResult = 'F !!!!!';
    }
  }
}
