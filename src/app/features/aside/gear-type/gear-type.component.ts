import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { SelectButton } from 'primeng/selectbutton';

@Component({
  selector: 'app-gear-type',
  imports: [AvatarModule, ButtonModule, Tooltip, FormsModule, SelectButton],
  templateUrl: './gear-type.component.html',
  styleUrl: './gear-type.component.css'
})
export class GearTypeComponent {
  value!: number;
  lstGears = [
    { name: 'A-gear', imagen: '/imgs/ag-guarder.png' },
    { name: 'B-gear', imagen: '/imgs/bg-veil.png' },
    { name: 'I-gear', imagen: '/imgs/igear-binder.png' },
    { name: 'M-gear', imagen: '/imgs/mg-defender.png' },
    // ...continúa
  ];

  type: any[] = [
      { name: 'R-Type', value: 1 },
      { name: 'D-Type', value: 2 },
      { name: 'E-Type', value: 3 }
  ];
}
