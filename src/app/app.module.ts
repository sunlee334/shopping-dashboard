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
import { MatSliderModule, MatTableModule, MatToolbarModule } from '@angular/material';
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
import { ConversionCountComponent } from './conversion-count/conversion-count.component';
import { RevenueComponent } from './revenue/revenue.component';
import { DailyRevenueComponent } from './daily-revenue/daily-revenue.component';
import { DailyConversionCountComponent } from './daily-conversion-count/daily-conversion-count.component';
import { DeviceCategoryComponent } from './device-category/device-category.component';
import { ConversionRateComponent } from './conversion-rate/conversion-rate.component';
import { AvgOrderValueComponent } from './avg-order-value/avg-order-value.component';
import { SalesProjectionComponent } from './sales-projection/sales-projection.component';
import { ThirdPartyPurchaseComponent } from './third-party-purchase/third-party-purchase.component';
import { ProductRankComponent } from './product-rank/product-rank.component';
import { DailyProductRankComponent } from './daily-product-rank/daily-product-rank.component';
import { YearRevenueComponent } from './year-revenue/year-revenue.component';
import { YearConversionCountComponent } from './year-conversion-count/year-conversion-count.component';

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
    ConversionCountComponent,
    RevenueComponent,
    DailyRevenueComponent,
    DailyConversionCountComponent,
    DeviceCategoryComponent,
    ConversionRateComponent,
    AvgOrderValueComponent,
    SalesProjectionComponent,
    ThirdPartyPurchaseComponent,
    ProductRankComponent,
    DailyProductRankComponent,
    YearRevenueComponent,
    YearConversionCountComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
