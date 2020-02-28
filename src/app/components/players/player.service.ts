import { Injectable, EventEmitter } from '@angular/core';
import { Player } from './Player.model';
import { TeamService } from '../teams/team.service';
import { Subject } from 'rxjs';

@Injectable()
export class PlayerService {

  players:Player[]=[new Player('sara',23),new Player('youness',27)];
  playerChanged=new Subject<Player[]>();
  debugger;
  constructor() { }

  getPlayers():Player[]{
 
  return this.players.slice();//pour creer un nouveau objet
  }
  AddPlayer(player:Player){
    this.players.push(player);
    this.playerChanged.next(this.players.slice());
    
    
  }

  AddPlayers(players:Player[]){
  /* for(let player of players){
     this.AddPlayer(player);
   }*/
   this.players.push(...players);
   this.playerChanged.next(this.players.slice());

  }
}
