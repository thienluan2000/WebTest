import { Component, OnInit , Input } from '@angular/core';
import {IGameModel} from 'src/models/game.model';
@Component({
  selector: 'app-game-col',
  templateUrl: './game-col.component.html',
  styleUrls: ['./game-col.component.scss']
})
export class GameColComponent implements OnInit {
  @Input() game: IGameModel | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
