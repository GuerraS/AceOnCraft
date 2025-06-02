import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';


@Component({
  selector: 'app-defense-section',
  imports: [PanelModule, DividerModule],
  templateUrl: './defense-section.component.html',
  styleUrl: './defense-section.component.css'
})
export class DefenseSectionComponent {

}
