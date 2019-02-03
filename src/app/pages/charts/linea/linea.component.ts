import { Component, OnInit, Input } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html',
  styleUrls: ['./linea.component.scss']
})
export class LineaComponent implements OnInit {

  @Input() forecast;
  @Input() temperature;

  dataSource: Object;

  width = 600;
  height = 300;
  type = 'line';
  dataFormat = 'json';

  constructor() {
  }

  ngOnInit() {

    this.dataSource = {
      'chart': {
        'caption': 'Pronóstico del día',
        'yaxisname': 'Temperatura',
        'subcaption':  formatDate(new Date(), 'dd/MM/yyyy', 'en-US'),
        'numbersuffix': ' °',
        'rotatelabels': '0',
        'setadaptiveymin': '1',
        'theme': 'fusion'
      },
      'data': this.forecast
    };
  }

}
