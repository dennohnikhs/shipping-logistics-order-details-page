import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { ShippingLogisticsSidebarComponent } from "./shipping-logistics-sidebar/sidebar-filters.component";
import { ShippingLogisticsOrderDetailsComponent } from "./shipping-logistics-order-details/shipping-logistics-order-details.component";
import { OrderShippingDetailsHeaderComponent } from "./shipping-logistics-details-header/product-post.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    OrderShippingDetailsHeaderComponent,
    ShippingLogisticsSidebarComponent,
    ShippingLogisticsOrderDetailsComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "ecommerce-app";
}
