import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RootComponent } from './root/root.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [

  RootComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
