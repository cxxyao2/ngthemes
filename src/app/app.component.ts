import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from './theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDarkTheme = false;

  constructor(
    private themeService: ThemeService,
    private overlayContainer: OverlayContainer
  ) {}
  ngOnInit(): void {
    this.themeService.isDarkTheme.subscribe(
      (value) => {
        this.isDarkTheme = value;
        this.processOverlayComponentTheme(value);
      },
      (error) => {
        console.log('error is ', error);
      },
      () => {
        console.log('get theme mode');
      }
    );
  }

  // TODO 因为基于覆盖层的组件（例如：menu、select、dialog 等）不是被应用程序的根组件包裹，而是和根组件平级的 <div class="cdk-overlay-container"> 节点
  // toggle 在 light or dark
  private processOverlayComponentTheme(checked: boolean) {
    const overlayContainerElement = this.overlayContainer.getContainerElement();
    const themeWrapperClass = 'dark-theme';
    if (checked) {
      overlayContainerElement.classList.add(themeWrapperClass);
    } else {
      overlayContainerElement.classList.remove(themeWrapperClass);
    }
  }
}
