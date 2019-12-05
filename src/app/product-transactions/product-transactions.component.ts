import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-transactions',
  templateUrl: './product-transactions.component.html',
  styleUrls: ['./product-transactions.component.css'],
})
export class ProductTransactionsComponent {
  // tslint:disable-next-line:variable-name
  private _props: any = {};

  @Input()
  set props(props: any) {
    this._props = props;
  }

  get props(): any { return this._props; }
}
