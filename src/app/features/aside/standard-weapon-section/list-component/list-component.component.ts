import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { FixesI } from '@core/model/advanceWeaponModel/advance-weapon.interface';

@Component({
  selector: 'app-list-component',
  imports: [FormsModule, MultiSelectModule],
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css'
})
export class ListComponentComponent {

  titulo = input<string>('');
  selectionLimit = input<string>();
  type = input<string>(''); 
  fixes!: FixesI[];
  selectedFixes!: FixesI[];

}
