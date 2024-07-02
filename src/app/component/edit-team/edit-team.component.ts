import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {
  teamform!: FormGroup
  team: any = {};
  id: any;

  constructor(private tService: TeamService,
    private activatedroute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    this.id = this.activatedroute.snapshot.params['id'];
    this.tService.getTeamById(this.id).subscribe((data) => {
      this.team = data.team;
    });

  }
  editTeam() {
    console.log('here the object', this.team);
    this.tService.editTeam(this.team).subscribe(
      (response) => {
        console.log('here response from BE ', response.isEdited);
        this.router.navigate(['admin']);



      }
    );
  }

}

