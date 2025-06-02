import { Component } from '@angular/core';

import { MainSectionComponent } from '../main/main-section/main-section.component';
import { AsideGearComponent } from '../aside/aside-gear/aside-gear.component';

@Component({
  selector: 'app-view',
  imports: [ MainSectionComponent, AsideGearComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
   stats = {
    attack: 331,
    defense: 2,
    evasion: 268,
    fuel: 35,
    spirit: 37,
    shield: 14,
    unusedPoints: 0
  };

  standardWeapon = {
    accuracy: '143.80%',
    pierce: '54.00%',
    attackPower: '56.22 ~ 100.61',
    damage: '961.02 ~ 1719.84'
  };

  advancedWeapon = {
    accuracy: '94.80%',
    pierce: '67.00%',
    attackPower: '1067.47 ~ 1209.53',
    damage: '2120.10 ~ 2402.24'
  };
}
