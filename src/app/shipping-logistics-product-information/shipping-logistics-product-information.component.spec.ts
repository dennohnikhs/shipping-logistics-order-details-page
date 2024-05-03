import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingLogisticsProductInformationComponent } from './shipping-logistics-product-information.component';

describe('ShippingLogisticsProductInformationComponent', () => {
  let component: ShippingLogisticsProductInformationComponent;
  let fixture: ComponentFixture<ShippingLogisticsProductInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingLogisticsProductInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingLogisticsProductInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
