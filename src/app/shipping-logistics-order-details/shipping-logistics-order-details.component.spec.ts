import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingLogisticsOrderDetailsComponent } from './shipping-logistics-order-details.component';

describe('ShippingLogisticsOrderDetailsComponent', () => {
  let component: ShippingLogisticsOrderDetailsComponent;
  let fixture: ComponentFixture<ShippingLogisticsOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingLogisticsOrderDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingLogisticsOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
