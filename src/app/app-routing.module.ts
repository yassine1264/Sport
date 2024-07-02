import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { AddMatcheComponent } from './component/add-matche/add-matche.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AdminComponent } from './component/admin/admin.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayerComponent } from './component/player/player.component';
import { PlayersComponent } from './component/players/players.component';
import { TeamsComponent } from './component/teams/teams.component';
import { PlayerTableComponent } from './component/player-table/player-table.component';
import { MatcheTableComponent } from './component/matche-table/matche-table.component';
import { TeamsTableComponent } from './component/teams-table/teams-table.component';
import { MatchInfoComponent } from './component/match-info/match-info.component';
import { TeamInfoComponent } from './component/team-info/team-info.component';
import { PlayersInfoComponent } from './component/players-info/players-info.component';
import { SearchComponent } from './component/search/search.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { EditTeamComponent } from './component/edit-team/edit-team.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'inscription', component: SignupComponent },
  { path: 'addMatch', component: AddMatcheComponent },
  { path: 'addTeam', component: AddTeamComponent },
  { path: 'addPlayer', component: AddPlayerComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'matchInfo/:id', component: MatchInfoComponent },
  { path: 'teamInfo/:id', component: TeamInfoComponent },
  { path: 'playerinfo/:id', component: PlayersInfoComponent },
  { path: "search", component: SearchComponent },
  { path: 'editMatch/:id', component: EditMatchComponent },
  { path: 'editTeam/:id', component: EditTeamComponent },
  { path: 'editPlayer/:id', component: EditPlayerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
