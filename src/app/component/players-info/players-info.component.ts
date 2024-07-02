import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.css']
})
export class PlayersInfoComponent implements OnInit {
  id: any;
  player:any;
  constructor(private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.playerService.getPlayerById(this.id).subscribe(
      (data) => {
        console.log('here response playerInfo from BE', data.player);
        this.player=data.player;



      });
  }

}
