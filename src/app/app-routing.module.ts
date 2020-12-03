import { DataResolverService } from './data-resolver.service';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'finishedHabits',
    loadChildren: () => import('./pages/finishedHabits/finishedHabits.module').then( m => m.FinishedHabitsPageModule)
  },
  {
    path: 'urgentToDos',
    loadChildren: () => import('./pages/urgentToDos/urgentToDos.module').then( m => m.UrgentToDosPageModule)
  },
  {
    path: 'laterToDos',
    loadChildren: () => import('./pages/laterToDos/laterToDos.module').then( m => m.LaterToDosPageModule)
  },
  {
    path: 'doneToDos',
    loadChildren: () => import('./pages/doneToDos/doneToDos.module').then( m => m.DoneToDosPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tos',
    loadChildren: () => import('./tos/tos.module').then( m => m.TosPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'privacy',
    loadChildren: () => import('./privacy/privacy.module').then( m => m.PrivacyPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'detail/:id',
    resolve: {
      habitData: DataResolverService
    },
    loadChildren: () => import('./pages/detail/detail.module').then( m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
