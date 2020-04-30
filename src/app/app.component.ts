import { Component } from '@angular/core';
import pegawaidata from '../assets/pegawai.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang9-json';
  Pegawai: any = pegawaidata;
}