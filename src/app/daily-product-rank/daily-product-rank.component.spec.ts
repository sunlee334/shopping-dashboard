import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyProductRankComponent } from './daily-product-rank.component';

describe('DailyProductRankComponent', () => {
  let component: DailyProductRankComponent;
  let fixture: ComponentFixture<DailyProductRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyProductRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyProductRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
