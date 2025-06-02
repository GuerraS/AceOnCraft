import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-attack-gear',
  imports: [PanelModule, DividerModule, ButtonModule],
  templateUrl: './attack-gear.component.html',
  styleUrl: './attack-gear.component.css'
})
export class AttackGearComponent {

}
