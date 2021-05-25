import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TileComponent } from './tile/tile.component';
import { MaterialAllModule } from './material-all.module';
import { DialogContentExampleComponent } from './dialog-content-example/dialog-content-example.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TileComponent,
    DialogContentExampleComponent,
    DialogContentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAllModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
