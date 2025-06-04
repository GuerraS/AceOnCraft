import { Injectable } from '@angular/core';
import { FixesI } from '@core/model/advanceWeaponModel/advance-weapon.interface';
import { FixStrategy } from '@core/model/advanceWeaponModel/fix-strategy.interface';

@Injectable({
  providedIn: 'root'
})
export class SuffixStrategyService implements FixStrategy{
  fixList!: FixesI[];
  /**
   * Method that gets the list of suffixes.
   * @param config Configuration to get the list of suffixes.
   */
  getItemList(config: any): void {
    console.log('executing suffix strategy', config);
  }
}
