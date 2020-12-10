import { NgModule } from '@angular/core';
import { NgxIsStandaloneService } from './ngx-is-standalone.service';

@NgModule({
  providers: [NgxIsStandaloneService],
  exports: []
})
export class NgxIsStandaloneModule { }
