import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'search-bar', 
    loadChildren: () => import('./search-bar/search-bar.module').then(m => m.SearchBarModule) 
  },
  { 
    path: 'search-bar/:brand', 
    loadChildren: () => import('./brand-page/brand-page.module').then(m => m.BrandPageModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
