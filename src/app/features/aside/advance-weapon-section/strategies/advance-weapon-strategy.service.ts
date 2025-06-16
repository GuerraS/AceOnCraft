import { Injectable } from '@angular/core';
import { FixesI } from '@core/model/advanceWeaponModel/advance-weapon.interface';
import { FixStrategy } from '@core/model/advanceWeaponModel/fix-strategy.interface';

@Injectable({
  providedIn: 'root'
})
export class AdvanceWeaponStrategyService implements FixStrategy{
   /**
   * Method that gets the list of weapons.
   * @param config Configuration to get the list of weapons.
   */
  getItemList(): FixesI[] {
    return [
      {
        id: 1,
        name: 'Hieros',
        code: 'WPN1'
      },
      {
        id: 2,
        name: 'Clay',
        code: 'WPN2'
      },
      {
        id: 3,
        name: 'Schriel',
        code: 'WPN23'
      }
    ];
  }
}
