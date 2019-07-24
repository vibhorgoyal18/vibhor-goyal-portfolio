import {ModuleWithProviders, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './modules/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: '**',
    component: MainComponent
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' });
