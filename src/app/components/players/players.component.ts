import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from './Player.model';
import { PlayerService } from './player.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
  //providers:[CounterService] //si on veut creer pour chaque composant une instance de sevice ,il devient pas singleton
})
export class PlayersComponent implements OnInit,OnDestroy {
players:Player[];
PlayersSubscription:Subscription;
  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.players=this.playerService.getPlayers();
    this.PlayersSubscription=this.playerService.playerChanged.subscribe((players:Player[])=>{
      this.players=players;
    })
  }

  ngOnDestroy(){
    this.PlayersSubscription.unsubscribe();
  }
 



}