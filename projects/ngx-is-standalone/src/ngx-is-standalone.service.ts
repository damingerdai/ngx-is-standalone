import { Inject, Injectable, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class NgxIsStandaloneService {

  public get isStandalone(): boolean {
    return this._document.defaultView?.navigator?.standalone
      || (this._document.defaultView.matchMedia('(display-mode: standalone)').matches);
  }

  constructor(
    // tslint:disable-next-line variable-name
    @Optional() @Inject(DOCUMENT) private _document: any,
  ) {}



}
