import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { StatGearComponent } from '../stat-gear/stat-gear.component';
import { AttackGearComponent } from '../attack-gear/attack-gear.component';
import { DefenseSectionComponent } from '../defense-section/defense-section.component';
import { EvasionSectionComponent } from '../evasion-section/evasion-section.component';
import { CapacitySectionComponent } from "../capacity-section/capacity-section.component";

@Component({
  selector: 'app-main-section',
  imports: [PanelModule, StatGearComponent, AttackGearComponent, DefenseSectionComponent, EvasionSectionComponent, CapacitySectionComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {

}
