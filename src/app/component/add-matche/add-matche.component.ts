import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-add-matche',
  templateUrl: './add-matche.component.html',
  styleUrls: ['./add-matche.component.css']
})
export class AddMatcheComponent implements OnInit {
  matchForm!: FormGroup;
  match: any = {};
  constructor(private mService: MatchService,
    private router: Router
  ) { }

  ngOnInit(): void { }
  addMatch() {
    console.log("Here match object", this.match);
    this.mService.addMatch(this.match).subscribe(
      (response) => {
        console.log("Here response match added from BE", response.isAdded);
        this.router.navigate(['admin']);
      }


    );
  }

}
