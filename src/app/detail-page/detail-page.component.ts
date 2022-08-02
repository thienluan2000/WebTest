import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent  {
 
  myControl = new FormControl('');
  options: string[] = ['1.0', '2.0', '3.0'];
}
