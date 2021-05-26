import { Component, OnInit, OnDestroy } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TenThemeService } from './ten-theme.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  newTheme: string | null = null;
  oldTheme: string | null = null;
  subscription: Subscription | null = null;

  constructor(
    private themeService: TenThemeService,
    private overlayContainer: OverlayContainer
  ) {}
  ngOnInit(): void {
    this.subscription = this.themeService.currentThemeName.subscribe(
      (value) => {
        this.newTheme = value;
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

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  // 因为基于覆盖层的组件（例如：menu、select、dialog 等）不是被应用程序的根组件包裹，而是和根组件平级的 <div class="cdk-overlay-container"> 节点
  // toggle 在 light or dark,
  // color and typography  同时得到更改
  private processOverlayComponentTheme(currentTheme: string) {
    const overlayContainerElement = this.overlayContainer.getContainerElement();
    if (this.oldTheme) {
      overlayContainerElement.classList.remove(this.oldTheme);
    }
    this.oldTheme = currentTheme;
    overlayContainerElement.classList.add(currentTheme);
  }
}
