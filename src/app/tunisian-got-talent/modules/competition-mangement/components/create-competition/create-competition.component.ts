import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { GlobalService } from 'app/tunisian-got-talent/services/global.service';
import { competitionService } from '../../services/competition.services';


@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.scss']
})
export class CreateCompetitionComponent implements OnInit {

  newCompFormG: FormGroup;
  private connectedUser: any;


  constructor(private globalService: GlobalService, private location: Location, private competitionService: competitionService) { }

  ngOnInit() {
    this.newCompFormG = new FormGroup({
      nom: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      competition_type: new FormControl('Talents divers', Validators.required),
      date_deb: new FormControl('', Validators.required),
      date_fin: new FormControl('', Validators.required),
      nb_max_participant: new FormControl('', Validators.required),
      userId: new FormControl('')
    })
  }


  OnSubmit() {
    
    if (this.newCompFormG.valid) {
      this.globalService.getConnectedUser().subscribe((connectedUser) => {
        this.connectedUser = connectedUser;
        this.newCompFormG.controls['userId'].setValue(this.connectedUser.id)
        const competition = this.newCompFormG.value;
        console.log('competition', competition)
        /** WebService PUT*/
        this.competitionService.createComp(competition).subscribe(e => {
          console.log('e', e)
          /** Success popup */
          let modal = document.getElementById("myModal");
          modal.style.display = "block"
          /** Redirect */
          this.newCompFormG.reset();
        })
      });
    }
  }

  closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none"
  }
}
