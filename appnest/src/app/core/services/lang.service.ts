import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  public currentLanguageSubject:BehaviorSubject<string> = new BehaviorSubject<string>('ar');
  currentLanguage$ = this.currentLanguageSubject.asObservable();
  
  changeLanguage(language: string) {
    this.currentLanguageSubject.next(language);
  }
}
