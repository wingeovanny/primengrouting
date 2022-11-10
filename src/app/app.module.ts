
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { CardModule } from 'primeng/card';
import { LoadStepComponent } from './components/load-step/load-step.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { GridComponent } from './pages/grid/grid.component';
import { AfiliacionComponent } from './pages/afiliacion/afiliacion.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ButtonModule } from "primeng/button";
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    LoadStepComponent,
    GridComponent,
    AfiliacionComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    ProgressBarModule,
    ButtonModule,
    ImageModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
