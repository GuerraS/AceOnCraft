import { Injectable } from '@angular/core';
import { FixesI } from '@core/model/advanceWeaponModel/advance-weapon.interface';
import { FixStrategy } from '@core/model/advanceWeaponModel/fix-strategy.interface';

@Injectable({
  providedIn: 'root'
})
export class PrefixStrategyService implements FixStrategy{
  SuffixList!: FixesI[];
  /**
   * Method that gets the list of prefixes.
   * @param config Configuration to get the list of prefixes.
   */
 getItemList(): FixesI[] {
    return [
      {
        id: 1,
        name: 'Atack',
        code: 'PRFX1'
      },
      {
        id: 2,
        name: 'Bio',
        code: 'PRFX2'
      }
    ];
  }
}
