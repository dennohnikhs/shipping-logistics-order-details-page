import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingLogisticsOrderInformationComponent } from './shipping-logistics-order-information.component';

describe('ShippingLogisticsOrderInformationComponent', () => {
  let component: ShippingLogisticsOrderInformationComponent;
  let fixture: ComponentFixture<ShippingLogisticsOrderInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingLogisticsOrderInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingLogisticsOrderInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
