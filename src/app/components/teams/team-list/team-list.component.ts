import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

 @Output() teams:Team[];
 

  constructor(private teamService:TeamService,private router:Router,private route :ActivatedRoute) { }

  ngOnInit(){
     this.teams=this.teamService.getTeam();
  }
  OnNavigate(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }













}
