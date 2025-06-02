import { Component } from '@angular/core';
import { ViewComponent } from './features/view/view.component';

@Component({
  selector: 'app-root',
  imports: [ViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ace-on-craft';
}
