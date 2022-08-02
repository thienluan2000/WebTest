import { Component } from '@angular/core';
import { IGameModel } from 'src/models/game.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GameStore';
  
  private baseImgUrl: string = '/assets/images';

 
  constructor() { }

  ngOnInit(): void {
  }

}

