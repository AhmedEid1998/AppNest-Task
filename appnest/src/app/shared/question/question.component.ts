import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QustionDeleted } from 'src/app/core/interfaces/qustion-deleted';
import { LangService } from 'src/app/core/services/lang.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent {
  constructor(public dataService: LangService) {}
  @Input() title!: string;
  @Input() index!: number;
  @Output() sendData = new EventEmitter<QustionDeleted>();
  questions: number[] = [1];
  addChoice() {
    this.questions.push(1);
  }

  deleteQuetion(index: number, type: string) {
    let obj: QustionDeleted = { index: index, type: type };
    this.sendData.emit(obj);
  }
}
