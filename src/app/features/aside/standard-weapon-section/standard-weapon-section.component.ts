import { Component, input } from '@angular/core';
import { ListComponentComponent } from "./list-component/list-component.component";
import { FixesI, StandardWeaponModel } from '@core/model/standardWeaponModel/standard-weapon.interface';
import { FixSrategyFactoryService } from './strategies/fix-srategy-factory.service';

@Component({
  selector: 'app-standard-weapon-section',
  imports: [ListComponentComponent],
  templateUrl: './standard-weapon-section.component.html',
  styleUrl: './standard-weapon-section.component.css'
})
export class StandardWeaponSectionComponent {

  titulo = input<string>('');
  selectionLimit = input<string>();
  type = input<string>(''); 
  fixes!: FixesI[];
  selectedFixes!: FixesI[];

  constructor(private _strategyFactory: FixSrategyFactoryService) {}
  
  ngOnInit(): void {
    const strategy = this._strategyFactory.getStrategy(this.type());
    this.fixes = strategy.getItemList();
  }
}
