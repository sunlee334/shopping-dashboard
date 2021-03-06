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
  MatChipsModule,
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
import { MatCardComponent } from './mat-card/mat-card.component';
import { BehaviorDashboardComponent } from './behavior-dashboard/behavior-dashboard.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ConversionPathComponent } from './conversion-path/conversion-path.component';
import { ProductTransactionsComponent } from './product-transactions/product-transactions.component';
import { DailyProductTransactionsComponent } from './daily-product-transactions/daily-product-transactions.component';
import { ProductRevenueComponent } from './product-revenue/product-revenue.component';
import { DailyProductRevenueComponent } from './daily-product-revenue/daily-product-revenue.component';

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
    MatCardComponent,
    BehaviorDashboardComponent,
    DatePickerComponent,
    ConversionPathComponent,
    ProductTransactionsComponent,
    DailyProductTransactionsComponent,
    ProductRevenueComponent,
    DailyProductRevenueComponent,
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
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
