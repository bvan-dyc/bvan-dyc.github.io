import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PyramidekaComponent } from './pyramideka/pyramideka.component';
import { UnityPoolComponent } from './unity-pool/unity-pool.component';
import { GameJamsComponent } from './game-jams/game-jams.component';
import { MatTabsModule } from '@angular/material/tabs';
import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ContactComponent } from './contact/contact.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import { LIGHTBOX_CONFIG } from '@ngx-gallery/lightbox';
import { GALLERY_CONFIG } from '@ngx-gallery/core';
import { MatIconModule } from '@angular/material/icon';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PyramidekaComponent,
    UnityPoolComponent,
    GameJamsComponent,
    HeaderComponent,
    PortfolioComponent,
    CurriculumComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FlexLayoutModule,
    MatButtonModule,
    PdfViewerModule,
    GalleryModule,
    LightboxModule,
    GallerizeModule,
    MatIconModule,
    Angular2FontawesomeModule,
  ],
  providers: [
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        keyboardShortcuts: false
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
