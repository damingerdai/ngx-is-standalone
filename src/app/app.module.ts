import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedCdkModule } from './shared.cdk.module';
import { SharedMaterialModule } from './shared.material.module';
import { NgxIsStandaloneModule } from 'ngx-is-standalone';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedCdkModule,
    SharedMaterialModule,
    NgxIsStandaloneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
