import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchform!: FormGroup
  match: any = {};
  id: any;

  constructor(private mService: MatchService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.mService.getMatchById(this.id).subscribe(
      (data) => {
        this.match = data.match;

      });
  }
  editMatch() {
    console.log("here match object", this.match);
    this.mService.editMatch(this.match).subscribe(
      (response) => {
        console.log('here response from BE', response.isEdited);
        this.router.navigate(['admin']);

      }
    );
  }
}


