import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IGameModel } from 'src/models/game.model';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class GameService {
  public products: IGameModel[];
  private baseImgUrl: string = '/assets/images';

  constructor(
    private http: HttpClient, private route: ActivatedRoute
  ) {
    this.products = [
        new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
          new IGameModel(
            "MI1",
            'Kit test covid',
            13,
            `${this.baseImgUrl}/kittest.jpg`,
            "Game",
            'This is kit test covid From USA',
          ),
    ];
  }

  public getList(keyword: string, category: string): Observable<IGameModel[]> {

    let result = this.products;
    if (category !== '') {
      result = this.products.filter(v => v.classify.indexOf(category!) > -1);
    }
    if (keyword !== '') {
      result = result.filter(v => v.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
    }

    return of(result);
  }

}