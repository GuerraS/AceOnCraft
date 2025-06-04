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
 getItemList(config: any): void {
    console.log('executing prefix strategy', config);
  }
}
