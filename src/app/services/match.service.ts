import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  //matchURL=> Back End server adress
  matchURL: string = 'http://localhost:3000/api/matches'

  constructor(private http: HttpClient) { }
  addMatch(match: any) {
    return this.http.post<{ isAdded: boolean }>(this.matchURL, match);
  }

  editMatch(matchObj: any) {
    return this.http.put<{ isEdited: string }>(this.matchURL, matchObj);
  }

  deleteMatch(id: any) {
    return this.http.delete<{ isDeleted: boolean }>(`${this.matchURL}/${id}`);
  }

  getMatchById(id: any) {
    return this.http.get<{ match: any }>(`${this.matchURL}/${id}`);
  }


  getAllMatches() {
    return this.http.get<{ matches: any }>(this.matchURL);
  }

  searchMatchesByScores(SearchObj: any) {
    return this.http.post<{ T: any }>(this.matchURL + "/search", SearchObj);
  }




}

