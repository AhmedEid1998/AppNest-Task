import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Subject } from 'src/app/core/interfaces/subject';
import { DataService } from 'src/app/core/services/data.service';
import { LangService } from 'src/app/core/services/lang.service';

@Component({
  selector: 'app-subjects-content',
  templateUrl: './subjects-content.component.html',
  styleUrls: ['./subjects-content.component.scss'],
  providers: [MessageService]
})
export class SubjectsContentComponent {
  constructor(
    public dataService: DataService,
    public langService: LangService,
    private messageService: MessageService
  ) {}

  subjects: Subject[] = [];
  isLoading: boolean = false;
  isError: boolean = false;

  private mySubscription!: Subscription;

  ngOnInit(): void {
    this.isLoading = true;
    this.mySubscription = this.dataService.getData().subscribe(
      (res) => {
        this.subjects = res;
        this.isLoading = false;
        this.isError = false
      },
      (err) => {
        this.isError = true
        this.isLoading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Connection Error',
        });
      }
    );
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
