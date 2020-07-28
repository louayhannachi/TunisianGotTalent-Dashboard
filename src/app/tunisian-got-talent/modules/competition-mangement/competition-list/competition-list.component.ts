import { Component, OnInit, ViewChild, ChangeDetectorRef, SimpleChanges, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { competitionService } from '../services/competition.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})
export class CompetitionListComponent implements OnInit,OnChanges {

  constructor(private competitionService: competitionService, private cdr: ChangeDetectorRef) { }

  displayedColumns: string[] = ['nom', 'comp_type', 'date_debut', 'date_fin', 'description','Maximum participants', 'edit', 'delete'];
  dataSource = new MatTableDataSource<any>([]);
  competitions: any[];
  compToDelete: any;


  editSection = false;
  editCompFormG: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;

    this.competitionService.getCompetitions().subscribe(e => {
      this.competitions = e;
      console.log('e', e)
      this.dataSource = new MatTableDataSource<any>(this.competitions);
      this.cdr.detectChanges();
      this.dataSource.paginator = this.paginator;
    })
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.competitions) {
      if (this.competitions.length > 0) {
        this.dataSource = new MatTableDataSource(this.competitions);
        this.dataSource.paginator = this.paginator;
      }
    }
  }

  editCompetition(competition) {
    this.editSection = true;
    console.log('competition to edit', competition);

    const competition_id = competition.id;
    this.editCompFormG = new FormGroup({
      id: new FormControl(competition_id),
      nom: new FormControl(competition.nom, Validators.required),
      description: new FormControl(competition.description, Validators.required),
      competition_type: new FormControl(competition.comp_type, Validators.required),
      date_deb: new FormControl(competition.date_debut, Validators.required),
      date_fin: new FormControl(competition.date_fin, Validators.required),
      nb_max_participant: new FormControl(competition.nb_max_participant, Validators.required),
      userId: new FormControl(competition.user_id)
    })
  }

  validateEditComp() {
    const competition = this.editCompFormG.value;
    this.competitionService.editCompetition(competition).subscribe(e => {
      this.competitionService.getCompetitions().subscribe(e => {
        this.competitions = e;
        this.dataSource = new MatTableDataSource<any>(this.competitions);
        this.cdr.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.editSection = false;
      })
    })
  }

  deleteCompetition(competition) {
    this.compToDelete = competition;
    let modal = document.getElementById("myModal");
    modal.style.display = "block"
  }

  confirmDelete(){
    this.competitionService.deleteComp(this.compToDelete.id).subscribe(e => {
      this.closeModal();
      this.competitions = this.competitions.filter(e => e.id !== this.compToDelete.id);
      this.dataSource = new MatTableDataSource<any>(this.competitions);
      this.dataSource.paginator = this.paginator;
    })
  }
  
  closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none"
  }
}

