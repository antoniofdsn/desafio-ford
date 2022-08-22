import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationGuard } from './auth/authorization/authorization.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'front-ford' },
  {
    path: 'front-ford',
    loadChildren: () =>
      import('../app/pages/home/home.module').then((m) => m.HomeModule),
    canLoad: [AuthorizationGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../app/auth/login/login.module').then((m) => m.LoginModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
