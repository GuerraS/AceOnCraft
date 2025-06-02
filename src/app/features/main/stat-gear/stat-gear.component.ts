import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-stat-gear',
  imports: [PanelModule, DividerModule, ButtonModule],
  templateUrl: './stat-gear.component.html',
  styleUrl: './stat-gear.component.css'
})
export class StatGearComponent {

}
