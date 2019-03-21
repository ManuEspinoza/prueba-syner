
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { FrontPageComponent } from './front-page.component';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { rootRoutes } from './front-page.routes';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FrontPageComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forChild(rootRoutes),
    CoreModule,
    SharedModule,
    TransferHttpCacheModule
  ],
  bootstrap: [FrontPageComponent],
  providers: [
  ]
})
export class FrontPageModule { }
