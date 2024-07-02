import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  id: any;
  team:any;
  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.teamService.getTeamById(this.id).subscribe(
      (data) => {
        console.log('here response team info from BE', data.team);
        this.team=data.team;


      }
    )
  }

}
