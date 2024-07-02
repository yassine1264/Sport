import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm!: FormGroup;
  player: any = {};
  constructor(private tPlayer: PlayerService,
    private router: Router
  ) { }

  ngOnInit(): void { }
  addplayer() {
    console.log("Here player object", this.player);
    this.tPlayer.addPlayer(this.player).subscribe(
      (response) => {
        console.log('here response from BE', response.isAdded);
        this.router.navigate(['admin']);


      }
    );



  }

}
