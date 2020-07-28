import { Component, OnInit } from '@angular/core';
import { competitionService } from '../../services/competition.services';
import { Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-competition-statistics',
  templateUrl: './competition-statistics.component.html',
  styleUrls: ['./competition-statistics.component.scss']
})
export class CompetitionStatisticsComponent implements OnInit {

  participations: any;
  ratings: any;

  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [{ data: [], label: "Nom" }];
  
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartPlugins = [];
  barChartLegend = true;
  barChartType: ChartType = "bar";


  participationChartReady = false;

  constructor(private cs: competitionService) { }

  ngOnInit() {
    this.cs.getCompetitions().subscribe(result => {
      if (result) {
        this.participations = result;
        result.forEach((item) => {
          this.barChartLabels.push(item.nom);
          this.barChartData[0].data.push(item.nb_participant);
        });
      }
      this.participationChartReady = true;
    });

    this.cs.getCompParticipations().subscribe(result => {

    })
    this.cs.getCompRatings().subscribe(e => {
      this.ratings = e;
    })
  }

}
