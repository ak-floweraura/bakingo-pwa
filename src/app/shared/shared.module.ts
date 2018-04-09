import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders, NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

const SHARED_MODULES = [
  CommonModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
  ReactiveFormsModule,
  HttpModule,
  HttpClientModule,
  RouterModule
];

const SHARED_COMPONENTS = [];

const SHARED_PIPES = [];

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  declarations: [
    ...SHARED_COMPONENTS
  ],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MatIconRegistry,
      ]
    }
  }
}
