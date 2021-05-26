import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TenThemeService {
  private currentTheme = new Subject<string>();
  currentThemeName = this.currentTheme.asObservable();

  setThemeClass(className: string): void {
    this.currentTheme.next(className);
  }
}
