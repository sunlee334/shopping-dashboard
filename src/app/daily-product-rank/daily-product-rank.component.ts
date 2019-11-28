import { Component } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  quantity: number;
  revenue: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: '제품', quantity: 1, revenue: 100 },
  { position: 2, name: '제품', quantity: 4, revenue: 100 },
  { position: 3, name: '제품', quantity: 6, revenue: 100 },
  { position: 4, name: '제품', quantity: 9, revenue: 100 },
];

@Component({
  selector: 'app-daily-product-rank',
  templateUrl: './daily-product-rank.component.html',
  styleUrls: ['./daily-product-rank.component.css'],
})
export class DailyProductRankComponent {
  displayedColumns: string[] = ['순위', '제품명', '판매량', '판매액'];
  dataSource = ELEMENT_DATA;
}
