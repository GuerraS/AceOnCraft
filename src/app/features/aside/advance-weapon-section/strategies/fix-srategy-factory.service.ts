import { Injectable } from '@angular/core';
import { PrefixStrategyService } from './prefix-strategy.service';
import { SuffixStrategyService } from './suffix-strategy.service';
import { FixStrategy } from '@core/model/advanceWeaponModel/fix-strategy.interface';

@Injectable({
  providedIn: 'root'
})
export class FixSrategyFactoryService {
constructor(
    private _prefixStrategyService: PrefixStrategyService,
    private _suffixStrategyService: SuffixStrategyService
  ) {}

   getStrategy(type: string): FixStrategy {
    switch (type) {
      case 'prefix': return this._prefixStrategyService;
      case 'weapon': return this._prefixStrategyService; 
      case 'suffix': return this._suffixStrategyService;
      default: throw new Error(`Unknown list type: ${type}`);
    }
  }
}
