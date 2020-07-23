import { talentService } from "./../../services/talent.services";
import { Component, OnInit, Input } from "@angular/core";
import {
  ChartDataSets,
  ChartOptions,
  ChartType,
  RadialChartOptions,
} from "chart.js";
import { Label, Color, MultiDataSet } from "ng2-charts";

@Component({
  selector: "talent-statistics",
  templateUrl: "./talent-statistics.component.html",
  styleUrls: ["./talent-statistics.component.css"],
})
export class TalentStatisticsComponent implements OnInit {
  /*Likes Chart*/

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = "bar";
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [{ data: [], label: "n° Likes" }];

  likesChartReady = false;

  /* Comments chart */

  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [[]];
  doughnutChartType: ChartType = "doughnut";
  CommentsChartReady = false;
  nbComment = 0;
  constructor(private talentService: talentService) {}

  ngOnInit() {
    this.getLikesChartData();
    this.getCommentsChartData();
  }

  getLikesChartData() {
    this.talentService.getLikesPerProfil().subscribe((result) => {
      if (result) {
        result.forEach((item) => {
          this.barChartLabels.push(item.username);
          this.barChartData[0].data.push(item.nbslike);
        });
        this.likesChartReady = true;
      }
    });
  }

  getCommentsChartData() {
    this.talentService.getLikesPerProfil().subscribe((result) => {
      if (result) {
        result.forEach((item) => {
          this.doughnutChartLabels.push(item.username);
          this.doughnutChartData[0].push(item.nbslike);
          this.nbComment = this.nbComment + item.nbslike;
        });
        this.CommentsChartReady = true;
      }
    });
  }
}
