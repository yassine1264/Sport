import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlayerService } from '../services/player.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  playerForm!: FormGroup
  player: any = {};
  id: any;

  constructor(private playerService: PlayerService,
    private activatedroute: ActivatedRoute,
  private router:Router) { }
  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    this.playerService.getPlayerById(this.id).subscribe(
      (data)=>{
       this.player = data.player;
      }
    );
  }
  editPlayer() {
    console.log('here is player object', this.player);
    this.playerService.editPlayer(this.player).subscribe(
      (response)=>{
        console.log('here response from BE ', response.isEdited);
this.router.navigate(['admin']);
      }
    );

  }

}
