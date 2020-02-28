import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { Z_FULL_FLUSH } from 'zlib';
import { TeamsIntroComponent } from './components/teams/teams-intro/teams-intro.component';
import { TeamDetailComponent } from './components/teams/team-detail/team-detail.component';
import { TeamEditComponent } from './components/teams/team-edit/team-edit.component';


const routes: Routes = [ {path:'',pathMatch:'full', redirectTo:'/teams'},
                         {path:'teams'  ,component:TeamsComponent ,
                          children:[{path:'',component:TeamsIntroComponent   },
                                    {path:'new',component:TeamEditComponent  },
                                    {path:':id',component:TeamDetailComponent},
                                    {path:':id/edit',component:TeamEditComponent  } ] },
                         {path:'players',component:PlayersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
