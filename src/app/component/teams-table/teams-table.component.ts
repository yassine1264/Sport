import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teamsTab: any = [
    // { id: 1, teamname: "RMD", name: "mohamed", owner: "anchiloti", foundation: "1902" },
    // { id: 2, teamname: "CA", name: "akrem", owner: "yassine", foundation: "1920" },
    // { id: 3, teamname: "EST", name: "ala", owner: "farouk", foundation: "1919" },
  ];
  constructor(private router: Router, private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(
      (response) => {
        console.log('here response teams from BE', response.teams);

        this.teamsTab = response.teams;

      }
    );
  }
  goToTeamInfo(x: number) {
    this.router.navigate([`teamInfo/${x}`])
  }
  goToeditTeam(x: any) {
    this.router.navigate([`editTeam/${x}`])
  }


  deletTeam(id:any) {
    // alert(x);
    this.teamService.deleteTeam(id).subscribe(
      (response) => {
        console.log('here response deleted Team From BE', response.isDeleted);
        if (response.isDeleted) {
          this.teamService.getAllTeams().subscribe(
            (data) => {
              this.teamsTab = data.teams;

            }
          );

        }
      }
    );
  }

}
