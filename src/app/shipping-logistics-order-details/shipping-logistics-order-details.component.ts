import { Component } from "@angular/core";
import { ShippingLogisticsOrderInformationComponent } from "../shipping-logistics-order-information/shipping-logistics-order-information.component";
import { ShippingLogisticsProductInformationComponent } from "../shipping-logistics-product-information/shipping-logistics-product-information.component";

@Component({
  selector: "app-shipping-logistics-order-details",
  standalone: true,
  imports: [
    ShippingLogisticsOrderInformationComponent,
    ShippingLogisticsProductInformationComponent,
  ],
  templateUrl: "./shipping-logistics-order-details.component.html",
  styleUrl: "./shipping-logistics-order-details.component.scss",
})
export class ShippingLogisticsOrderDetailsComponent {}
