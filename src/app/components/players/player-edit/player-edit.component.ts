import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Player } from '../Player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss']
})
export class PlayerEditComponent implements OnInit {

@ViewChild('nameOutput')nameOutput:ElementRef;
@ViewChild('ageOutput')ageOutput:ElementRef;
  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
  }

  PlayerAded(){
  const PlayerName=this.nameOutput.nativeElement.value;
  const PlayerAge=this.ageOutput.nativeElement.value;
    let PlayerNew=new Player(PlayerName,PlayerAge);
    this.playerService.AddPlayer(PlayerNew);
   
    
  }

}
