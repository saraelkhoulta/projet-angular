import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
 team:Team;
 id:number;
  constructor(private teamService:TeamService,private route:ActivatedRoute,private router:Router) {
    this.route.params.subscribe((params)=>{
      this.id=+params['id']
      this.team=this.teamService.getTeams(this.id);
    })
  }

  ngOnInit() {
  }

  AddPlayersToList(){
    this.teamService.AddPlayersTolist(this.team.players);
  }
  OnNavigate(){
    //this.router.navigate(["edit"],{relativeTo:this.route});
    //ou
    this.router.navigate(['/teams',this.id,'edit'])
  }


}
