import { Team } from './team.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Player } from '../players/Player.model';
import { PlayerService } from '../players/player.service';

@Injectable()
export class TeamService{

teams:Team[]=[new Team('madrid','club','https://www.realmadrid.com/img/horizontal_940px/escudo-real-madridbrandinghorizontal.jpg',[new Player('cristiano',33),new Player('crist',33)])
,new Team('barca','club','https://cdn.1min30.com/wp-content/uploads/2017/09/Symbole-Barcelona-400x324.jpg',[new Player('messi',44),new Player('oooo',33)])];




constructor(private playerService:PlayerService){}

getTeam(){
  return this.teams.slice();
}
AddPlayersTolist(players:Player[]){
this.playerService.AddPlayers(players);
}
getTeams(id:number):Team{

return this.teams[id];
}

}