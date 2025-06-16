import { Injectable } from '@angular/core';
import { PrefixStrategyService } from './prefix-strategy.service';
import { SuffixStrategyService } from './suffix-strategy.service';
import { FixStrategy } from '@core/model/advanceWeaponModel/fix-strategy.interface';
import { AdvanceWeaponStrategyService } from './advance-weapon-strategy.service';

@Injectable({
  providedIn: 'root'
})
export class FixSrategyFactoryService {
constructor(
    private _prefixStrategyService: PrefixStrategyService,
    private _suffixStrategyService: SuffixStrategyService,
    private _advanceWeaponStrategyService: AdvanceWeaponStrategyService
  ) {}

   getStrategy(type: string): FixStrategy {
    switch (type) {
      case 'prefix': return this._prefixStrategyService;
      case 'weapon': return this._advanceWeaponStrategyService;
      case 'suffix': return this._suffixStrategyService;
      default: throw new Error(`Unknown list type: ${type}`);
    }
  }
}
