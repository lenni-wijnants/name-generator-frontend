import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import {FormsModule} from '@angular/forms';
import { WebcamModule} from 'ngx-webcam';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import {HttpClientModule} from '@angular/common/http';
import { WallComponent } from './components/wall/wall.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ConfirmationComponent,
    WallComponent
  ],
  imports: [
    WebcamModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
