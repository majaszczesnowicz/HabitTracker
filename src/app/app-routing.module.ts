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
    path: 'zakonczone',
    loadChildren: () => import('./pages/zakonczone/zakonczone.module').then( m => m.ZakonczonePageModule)
  },
  {
    path: 'listy',
    loadChildren: () => import('./pages/listy/listy.module').then( m => m.ListyPageModule)
  },
  {
    path: 'napozniej',
    loadChildren: () => import('./pages/napozniej/napozniej.module').then( m => m.NapozniejPageModule)
  },
  {
    path: 'wykonane',
    loadChildren: () => import('./pages/wykonane/wykonane.module').then( m => m.WykonanePageModule)
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
