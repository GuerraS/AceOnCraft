import { Injectable } from '@angular/core';
import { FixesI } from '@core/model/advanceWeaponModel/advance-weapon.interface';
import { FixStrategy } from '@core/model/advanceWeaponModel/fix-strategy.interface';

@Injectable({
  providedIn: 'root'
})
export class SuffixStrategyService implements FixStrategy{
  /**
   * Method that gets the list of suffixes.
   * @param config Configuration to get the list of suffixes.
   */
  getItemList(): FixesI[] {
    return [
      {
        id: 1,
        name: 'Attack',
        code: 'SFX1'
      },
      {
        id: 2,
        name: 'Bio',
        code: 'SFX2'
      }
    ];;
  }
}
