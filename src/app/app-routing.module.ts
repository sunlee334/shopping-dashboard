import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConversionDashboardComponent } from './conversion-dashboard/conversion-dashboard.component';
import { BehaviorDashboardComponent } from './behavior-dashboard/behavior-dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'conversion-dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'conversion-dashboard', component: ConversionDashboardComponent },
  { path: 'behavior-dashboard', component: BehaviorDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
