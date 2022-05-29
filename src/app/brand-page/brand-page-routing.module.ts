import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandPageComponent } from './brand-page.component';

const routes: Routes = [{ path: '', component: BrandPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandPageRoutingModule { }
