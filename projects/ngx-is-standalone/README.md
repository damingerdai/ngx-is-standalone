# Ngx Is Standalone

Is standalone for angular

[![License MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/damingerdai/ngx-is-standalone/blob/master/LICENSE)

## Install

if you use npm:

```bash
npm install ngx-is-standalone
```

if you use yarn:

```bash
yarn add ngx-is-standalone
```

## Feedbacks

https://github.com/damingerdai/ngx-is-standalone/issues

## Simple Configuration

```ts
import { NgxIsStandaloneModule } from 'ngx-is-standalone';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxIsStandaloneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

```ts
import { Component } from '@angular/core';
import { NgxIsStandaloneService } from 'ngx-is-standalone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public get isStandalone() {
    return this.ngxIsStandaloneService.isStandalone;
  }

  constructor(private ngxIsStandaloneService: NgxIsStandaloneService) { }
}
```
