import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.css']
})
export class PlayerTableComponent implements OnInit {
  playersTab: any = [
    // { id: 1, name: "cristiano", age: "35", nbr: "7", position: "attaquant" },
    // { id: 2, name: "mbappe", age: "24", nbr: "8", position: "attaquant" },
    // { id: 3, name: "puyol", age: "39", nbr: "9", position: "defense" },
  ];

  constructor(
    private router: Router, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      (response)=>{
        console.log('here response players from BE',response.player);
        
        this.playersTab=response.player;
      }
    );

  }
  goToPlayersInfo(playerId: number) {
    this.router.navigate([`playerinfo/${playerId}`])
  }
  goToeditPlayers(playerId: number) {
    this.router.navigate([`editPlayer/${playerId}`])
  }
  goToDeletPlayer(id: any) {
    // alert(x);
    this.playerService.deletePlayer(id).subscribe(
      (response)=>{
        console.log('here response deleted player from BE',response.isDeleted);
        if (response.isDeleted) {
          this.playerService.getAllPlayers().subscribe(
            (data)=>{
              this.playersTab=data.player;
            }
          );
          
        }
      }
    );

  }

}
