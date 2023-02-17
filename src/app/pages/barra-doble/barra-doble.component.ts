import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { ChartEvent } from 'chart.js/dist/core/core.plugins';
/* import { TLabel } from 'ng2-charts'; */
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-barra-doble',
  templateUrl: './barra-doble.component.html',
  styles: [`.divi{
    margin:10px 10px 10px
  }`
  ]
})
export class BarraDobleComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;


  public proveedoresData: ChartData<'bar'> = {
    labels: [ '2021','2022','2023','2024','2025'],
    datasets: [
      { data: [ 100, 200, 300, 400, 500 ], label: 'Vendedor A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
      { data: [ 50,250, 30, 450, 250], label: 'Vendedor B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red' },
      ]
  };
  public productoData: ChartData<'bar'> = {
    labels: [ '2021','2022','2023','2024','2025'],
    datasets: [
      { data: [  200, 300, 400, 300,100 ], label: 'Carros', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
      ]
  };
  

}
