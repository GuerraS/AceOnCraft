import { Component } from '@angular/core';
import { AdvanceWeaponModel } from '@models/advanceWeaponModel/advance-weapon.interface';
import { Listbox } from 'primeng/listbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-advance-weapon-section',
  imports: [Listbox, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './advance-weapon-section.component.html',
  styleUrl: './advance-weapon-section.component.css'
})
export class AdvanceWeaponSectionComponent {
    lstWeapons!: AdvanceWeaponModel[];
    selectedItems: AdvanceWeaponModel[] = [];
    maxSelections:number = 2;

    ngOnInit() {
        this.lstWeapons = [
            { name: 'Epperiel', code: 'NY', image: '/imgs/ag-guarder.png' },
            { name: 'Hieros', code: 'RM', image: '/imgs/ag-guarder.png' },
            { name: 'Clay', code: 'LDN', image: '/imgs/ag-guarder.png' },
            { name: 'Schriel', code: 'IST', image: '/imgs/ag-guarder.png' },
            { name: 'Tyuricon', code: 'PRS', image: '/imgs/ag-guarder.png' },
            { name: 'Jilleot', code: 'PRS', image: '/imgs/ag-guarder.png' },
            { name: 'Leprechaun', code: 'PRS', image: '/imgs/ag-guarder.png' }
        ];
    }

    onSelectionChange(event: any) {
    if (this.selectedItems.length > this.maxSelections) {
      // Eliminar el último que intentó agregar
      const removed = this.selectedItems.pop();
      // Opcional: mostrar un mensaje
      // alert(`Máximo ${this.maxSelections} elementos permitidos.`);
    }
  }
}
