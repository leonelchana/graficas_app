import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Chart } from 'chart.js/dist';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {
  
@Input() horizontal:boolean=false;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptionsy: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    
    indexAxis:'y',
      scales: {
      x: {},
      y: {
       
      }
    },
    plugins: {
      legend: {
        display: true,
      },
   /*    datalabels: {
        anchor: 'end',
        align: 'end'
      } */
    }
  };
  public barChartOptionsx: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    
    indexAxis:'x',
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
   /*    datalabels: {
        anchor: 'end',
        align: 'end'
      } */
    }
  };

  @Input()barChartData!:ChartData<'bar'>;
  public barChartType: ChartType = 'bar';/* public barChartLabels:  BaseChartDirective["labels"] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
   */
  
  public barChartLegend = true;
/*   public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#ED5F76', hoverBackgroundColor: 'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#F763C4', hoverBackgroundColor: 'red' },
      { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'Series C', backgroundColor: '#D665E0', hoverBackgroundColor: 'red' },
      ],
      

  }; */
  constructor(){
  }
  public barChartOptions!: ChartConfiguration['options'];
  ngOnInit(): void {
    if(this.horizontal){
 this.barChartOptions=this.barChartOptionsy;
    }
  
  }
}
