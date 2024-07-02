import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teamForm!: FormGroup;
  team: any = {};
  constructor(private tService: TeamService,
    private router: Router
  ) { }


  ngOnInit(): void {
  }
  addteam() {
    console.log("Here team object", this.team);
    this.tService.addTeam(this.team).subscribe(
      (response) => {
        console.log('here response from BE', response.isAdded);
        this.router.navigate(['admin']);

      }
    );


  }
}
