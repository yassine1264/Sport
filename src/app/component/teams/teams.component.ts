import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamsTab:any=[];

  constructor( private TeamService:TeamService) { }

  ngOnInit(): void {
    this.TeamService.getAllTeams().subscribe(
      (response)=>{
        console.log('here response teams from BE',response.teams);
        this.teamsTab=response.teams;
        
      }
    );
  }

}
