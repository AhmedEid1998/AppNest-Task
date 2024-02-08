import { Component } from '@angular/core';
import { QustionDeleted } from 'src/app/core/interfaces/qustion-deleted';

@Component({
  selector: 'app-all-exercises',
  templateUrl: './all-exercises.component.html',
  styleUrls: ['./all-exercises.component.scss'],
})
export class AllExercisesComponent {
  ngOnInit(): void {
    this.dragAndDrop();
  }

  individualChoice: number[] = [1];
  multiChoice: number[] = [];
  textChoice: number[] = [];

  qustionType!: string;

  dragAndDrop() {
    let draggables: any = document.querySelectorAll('#draggable');
    let droppable: any = document.getElementById('droppable');

    draggables.forEach((draggable: any) => {
      draggable.addEventListener('dragstart', (event: any) => {
        this.qustionType = event.target.innerText;
        console.log('dragstart', this.qustionType);
      });
    });

    droppable.addEventListener('dragover', (event: any) => {
      event.preventDefault();
    });

    droppable.addEventListener('drop', (event: any) => {
      if (this.qustionType == 'اختيار من متعدد' || this.qustionType == 'Multiple Choice') 
      {
        this.multiChoice.push(this.multiChoice.length + 1);
      } else if (this.qustionType == 'نص' || this.qustionType == 'Text') {
        this.textChoice.push(this.textChoice.length + 1);
      } else {
        this.individualChoice.push(this.individualChoice.length + 1);
      }
    });
  }

  receiveData(obj: QustionDeleted) {
    if (obj.type == 'اختيار من متعدد') {
      this.multiChoice = [
        ...this.multiChoice.slice(0, obj.index),
        ...this.multiChoice.slice(obj.index + 1),
      ];
    } else if (obj.type == 'نص') {
      this.textChoice = [
        ...this.textChoice.slice(0, obj.index),
        ...this.textChoice.slice(obj.index + 1),
      ];
    } else {
      this.individualChoice = [
        ...this.individualChoice.slice(0, obj.index),
        ...this.individualChoice.slice(obj.index + 1),
      ];
    }
  }
}
