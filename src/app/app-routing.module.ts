import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewActionComponent } from './new-action/new-action.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ActionListComponent } from './action-list/action-list.component';

const routes: Routes = [ 

{path: 'newaction',             component: NewActionComponent },
{path: 'events',             component: ActionListComponent },
{path: 'addAction',             component: NewActionComponent },
{path: '',             component: LandingPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
