import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { GraficasService } from 'src/app/services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  @ViewChild (BaseChartDirective) chart: BaseChartDirective | undefined;

  public bgcolor: Color[] = ['#00F7AD', '#F1C40F', '#1A5276 ', '#CB4335'];
  public doughnutChartType: ChartType = 'doughnut';
  constructor(private graficasService: GraficasService) {}
  public doughnutChartLabels: string[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      
    ],
  };

  ngOnInit(): void {
    this.graficasService
      .getUsuariosRedesSocialesDonaData()
      .subscribe(({ labels, values }) => {
        console.log(labels, values);
        this.doughnutChartLabels = labels;
        this.doughnutChartData.labels=labels;
        this.doughnutChartData.datasets.push({
          
          data:values
         
        });
 
        this.chart?.update();
      });
  }
}
