import { Component } from '@angular/core';
import demodata from '../assets/demo.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang9-json';
  Players: any = demodata;
}
