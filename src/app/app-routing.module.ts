import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TnbHomeComponent } from './components/tnb-home/tnb-home.component';
import { TnbSubscribersComponent } from './components/tnb-subscribers/tnb-subscribers.component';
import { TnbConfigComponent } from './components/tnb-config/tnb-config.component';

const routes: Routes = [
  {
    path: '',
    component: TnbHomeComponent
  },
  {
    path: 'subs',
    component: TnbSubscribersComponent
  },
  {
    path: 'conf',
    component: TnbConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
