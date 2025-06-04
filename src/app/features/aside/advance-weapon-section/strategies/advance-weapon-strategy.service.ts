import { Injectable } from '@angular/core';
import { FixStrategy } from '@core/model/advanceWeaponModel/fix-strategy.interface';

@Injectable({
  providedIn: 'root'
})
export class AdvanceWeaponStrategyService implements FixStrategy{
   /**
   * Method that gets the list of weapons.
   * @param config Configuration to get the list of weapons.
   */
  getItemList(config: any): void {
    console.log('executing weapon strategy', config);
  }
}
