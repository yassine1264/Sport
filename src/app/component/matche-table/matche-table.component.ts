import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matche-table',
  templateUrl: './matche-table.component.html',
  styleUrls: ['./matche-table.component.css']
})
export class MatcheTableComponent implements OnInit {
  matchesTab: any = [
    // { id: 1, scoreOne: 2, scoreTwo: 0, teamOne: "EST", teamTwo: "CA" },
    // { id: 2, scoreOne: 2, scoreTwo: 1, teamOne: "JUV", teamTwo: "ROM" },
    // { id: 3, scoreOne: 0, scoreTwo: 3, teamOne: "RMD", teamTwo: "ATM" },
    // { id: 4, scoreOne: 2, scoreTwo: 2, teamOne: "CIT", teamTwo: "LIV" },
  ]

  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getAllMatches().subscribe(
      (response) => {
        console.log('here response matche from BE', response.matches);

        this.matchesTab = response.matches;
      }
    );
  }
  goToInfo(x: number) {
    this.router.navigate([`matchInfo/${x}`])
  }
  deleteMatch(id: any) {
    this.matchService.deleteMatch(id).subscribe(
      (response) => {
        console.log('here response deleted Match from BE', response.isDeleted);
        if (response.isDeleted) {
          this.matchService.getAllMatches().subscribe(
            (data) => {
              this.matchesTab = data.matches;

            });

        }


      });
  }
  goToeditMatch(x: any) {
    this.router.navigate([`editMatch/${x}`])
  }
  scoreResult(a: number, b: number, team: string) {
    if (a > b) {
      return [team + 'win', 'green'];
    } else if (a < b) {
      return [team + ' lose', 'red'];
    } else {
      return ['score Null', 'blue'];
    }


  }


}
