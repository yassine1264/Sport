import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  playersTab: any = []

 

  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      (response)=>{
        console.log("here response from BE",response.player);
        this.playersTab=response.player
        
      }
    );
  }

}



 
      
