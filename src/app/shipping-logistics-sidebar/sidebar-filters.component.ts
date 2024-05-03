import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-shipping-sidebar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./sidebar-filters.component.html",
  styleUrl: "./sidebar-filters.component.scss",
})
export class ShippingLogisticsSidebarComponent {
  showDropdownLinks = false;
}
