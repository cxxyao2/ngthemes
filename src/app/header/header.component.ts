import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TenThemeService } from '../ten-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  themeClassName: string | null = null;

  themeList = [
    'indigo-pink',
    'indigo-pink-dark',
    'deeppurple-amber',
    'deeppurple-amber-dark',
    'blue-yellow',
    'blue-yellow-dark',
    'pink-bluegrey',
    'pink-bluegrey-dark',
    'purple-green',
    'purple-green-dark',
  ];

  constructor(private themeService: TenThemeService) {}

  ngOnInit(): void {
    this.themeService.currentThemeName.subscribe(
      (data) => {
        this.themeClassName = data;
      },
      (error) => {
        console.log('err', error);
      },
      () => {
        console.log('theme changed');
      }
    );
  }

  toggleTheme(className: string): void {
    console.log('class is ', className);
    this.themeService.setThemeClass(className);
  }
}
