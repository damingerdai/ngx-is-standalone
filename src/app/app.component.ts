import { Component } from '@angular/core';
import { NgxIsStandaloneService } from 'ngx-is-standalone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-is-standalone';

  public get isStandalone() {
    return this.ngxIsStandaloneService.isStandalone;
  }

  constructor(private ngxIsStandaloneService: NgxIsStandaloneService) {

  }
}
