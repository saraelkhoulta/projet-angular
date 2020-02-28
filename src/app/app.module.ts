import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamListComponent } from './components/teams/team-list/team-list.component';
import { TeamDetailComponent } from './components/teams/team-detail/team-detail.component';
import { TeamItemComponent } from './components/teams/team-list/team-item/team-item.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerEditComponent } from './components/players/player-edit/player-edit.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HideDirective } from './directives/hide.directive';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { ExampleComponent } from './components/example/example.component';
import { TitleComponent } from './components/title/title.component';
import { BodyComponent } from './components/body/body.component';
import { TeamService } from './components/teams/team.service';
import { PlayerService } from './components/players/player.service';
import { CounterService } from './counter.service';
import { DropdownDirective } from './directives/dropdown.directive';
import{RouterModule,Routes} from '@angular/router';
import { TeamsIntroComponent } from './components/teams/teams-intro/teams-intro.component';
import { TeamEditComponent } from './components/teams/team-edit/team-edit.component'

const appRoutes:Routes = [
  
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    TeamListComponent,
    TeamDetailComponent,
    TeamItemComponent,
    PlayersComponent,
    PlayerEditComponent,
    HighlightDirective,
    HideDirective,
    YoutubePlayerComponent,
    ExampleComponent,
    TitleComponent,
    BodyComponent,
    DropdownDirective,
    TeamsIntroComponent,
    TeamEditComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TeamService,PlayerService,CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
