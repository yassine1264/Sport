import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { response } from 'express';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  // matchTab: any = [
  //   { id: 1, scoreOne: 2, scoreTwo: 0, teamOne: "EST", teamTwo: "CA" },
  //   { id: 2, scoreOne: 2, scoreTwo: 1, teamOne: "JUV", teamTwo: "ROM" },
  //   { id: 3, scoreOne: 0, scoreTwo: 1, teamOne: "RMD", teamTwo: "ATM" },
  //   { id: 4, scoreOne: 3, scoreTwo: 2, teamOne: "CIT", teamTwo: "LIV" },
  // ]
  T: any;
  searchForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private seacrchService:MatchService,
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      scoreOne: ["", [Validators.required]],
      scoreTwo: ["", [Validators.required]],
    })
  }
  search() {
    console.log("here object",this.searchForm.value);
    this.seacrchService.searchMatchesByScores(this.searchForm.value).subscribe(
      (response) =>{
        console.log("Here  match  from BE", response.T);

      }
    )
  }


}
