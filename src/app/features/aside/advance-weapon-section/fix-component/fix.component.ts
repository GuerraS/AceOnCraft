import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { FixesI } from '@core/model/advanceWeaponModel/advance-weapon.interface';
import { FixSrategyFactoryService } from 'app/features/aside/advance-weapon-section/strategies/fix-srategy-factory.service';
@Component({
  selector: 'app-advance-fixes',
  imports: [CommonModule, FormsModule, MultiSelectModule ],
  templateUrl: './fix.component.html',
  styleUrl: './fix.component.css'
})
export class FixComponent {
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
