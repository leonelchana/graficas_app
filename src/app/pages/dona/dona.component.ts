import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {
  
 public bgcolor:Color[]=[
  '#00F7AD',
  '#F1C40F',
  '#1A5276 ',
  '#CB4335'
  
 
];
  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other' ];


  public doughnutChartData: ChartData<'doughnut'> = {

    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100, 150],backgroundColor: this.bgcolor, borderColor: '#17202A  ' },
    
    ]
  };

  

  public color(): void{
    console.log(this.bgcolor)
  }
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
