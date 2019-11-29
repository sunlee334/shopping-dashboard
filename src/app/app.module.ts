import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';

import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDatepickerModule,
  MatFormFieldModule, MatInputModule,
  MatSliderModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutComponent } from './layout/layout.component';
import { ConversionDashboardComponent } from './conversion-dashboard/conversion-dashboard.component';
import { ProductRankComponent } from './product-rank/product-rank.component';
import { DailyProductRankComponent } from './daily-product-rank/daily-product-rank.component';
import { MatCardComponent } from './mat-card/mat-card.component';
import { BehaviorDashboardComponent } from './behavior-dashboard/behavior-dashboard.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PieChartComponent,
    BubbleChartComponent,
    NavbarComponent,
    DashboardComponent,
    LayoutComponent,
    ConversionDashboardComponent,
    ProductRankComponent,
    DailyProductRankComponent,
    MatCardComponent,
    BehaviorDashboardComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FlexLayoutModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatTabsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
