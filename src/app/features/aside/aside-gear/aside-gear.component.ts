import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { GearTypeComponent } from '../gear-type/gear-type.component';
import { AdvanceWeaponSectionComponent } from "../advance-weapon-section/advance-weapon-section.component";
import { StandardWeaponSectionComponent } from '../standard-weapon-section/standard-weapon-section.component';
@Component({
  selector: 'app-aside-gear',
  imports: [PanelModule, GearTypeComponent, AdvanceWeaponSectionComponent, StandardWeaponSectionComponent],
  templateUrl: './aside-gear.component.html',
  styleUrl: './aside-gear.component.css',
})
export class AsideGearComponent {

}
