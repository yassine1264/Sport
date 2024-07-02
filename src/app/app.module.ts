import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { CupEventComponent } from './component/cup-event/cup-event.component';
import { ResultComponent } from './component/result/result.component';
import { NewsComponent } from './component/news/news.component';
import { StandingsComponent } from './component/standings/standings.component';
import { BlogComponent } from './component/blog/blog.component';
import { InfoComponent } from './component/info/info.component';
import { ArticleComponent } from './component/article/article.component';
import { AddMatcheComponent } from './component/add-matche/add-matche.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AdminComponent } from './component/admin/admin.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayerComponent } from './component/player/player.component';
import { PlayersComponent } from './component/players/players.component';
import { TeamsComponent } from './component/teams/teams.component';
import { TeamComponent } from './component/team/team.component';
import { MatcheTableComponent } from './component/matche-table/matche-table.component';
import { TeamsTableComponent } from './component/teams-table/teams-table.component';
import { PlayerTableComponent } from './component/player-table/player-table.component';
import { MatchInfoComponent } from './component/match-info/match-info.component';
import { TeamInfoComponent } from './component/team-info/team-info.component';
import { PlayersInfoComponent } from './component/players-info/players-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReversePipe } from './pipes/reverse.pipe';
import { StarPipe } from './pipes/star.pipe';
import { SearchComponent } from './component/search/search.component';
import { HttpClientModule } from "@angular/common/http";
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { EditTeamComponent } from './component/edit-team/edit-team.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StandingsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    AddMatcheComponent,
    AddTeamComponent,
    AddPlayerComponent,
    AdminComponent,
    MatchesComponent,
    PlayerComponent,
    PlayersComponent,
    TeamsComponent,
    TeamComponent,
    MatcheTableComponent,
    TeamsTableComponent,
    PlayerTableComponent,
    MatchInfoComponent,
    TeamInfoComponent,
    PlayersInfoComponent,
    ReversePipe,
    StarPipe,
    SearchComponent,
    EditMatchComponent,
    EditTeamComponent,
    EditPlayerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
