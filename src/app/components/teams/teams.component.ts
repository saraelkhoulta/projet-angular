import { Component, OnInit } from '@angular/core';
import { Team } from './team.model';
import { TeamService } from './team.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  Selectedteam:Team;
  constructor(private teamService:TeamService) { }

  ngOnInit(){

  }

  
}
