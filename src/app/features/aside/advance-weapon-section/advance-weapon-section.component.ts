import { Component } from '@angular/core';
import { AdvanceWeaponModel } from '@models/advanceWeaponModel/advance-weapon.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FixComponent } from './fix-component/fix.component';


@Component({
  selector: 'app-advance-weapon-section',
  imports: [CommonModule, FormsModule, FixComponent],
  standalone: true,
  templateUrl: './advance-weapon-section.component.html',
  styleUrl: './advance-weapon-section.component.css'
})
export class AdvanceWeaponSectionComponent {
    weaponList!: AdvanceWeaponModel[];
    selectedItems: AdvanceWeaponModel[] = [];
    maxSelections:number = 2;

}
