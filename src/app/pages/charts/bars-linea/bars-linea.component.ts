import { Component, OnInit } from '@angular/core';

const data = {
  'chart': {
    'caption': 'Pronóstico del día',
    'yaxisname': 'Temperatura',
    'syaxisname': 'Humedad',
    'labeldisplay': 'rotate',
    'snumbersuffix': '%',
    'scrollheight': '10',
    'numvisibleplot': '10',
    'drawcrossline': '1',
    'theme': 'fusion'
  },
  'categories': [
    {
      'category': [
        {
          'label': 'Matzikama'
        },
        {
          'label': 'Cederberg'
        },
        {
          'label': 'Bergrivier'
        },
        {
          'label': 'Saldanha Bay'
        },
        {
          'label': 'Swartland'
        },
        {
          'label': 'Witzenberg'
        },
        {
          'label': 'Drakenstein'
        },
        {
          'label': 'Stellenbosch'
        },
        {
          'label': 'Breede Valley'
        },
        {
          'label': 'Langeberg'
        },
        {
          'label': 'Swellendam'
        },
        {
          'label': 'Theewaterskloof'
        },
        {
          'label': 'Overstrand'
        }
      ]
    }
  ],
  'dataset': [
    {
      'seriesname': 'Subsidies received %',
      'parentyaxis': 'S',
      'renderas': 'line',
      'plottooltext': '$dataValue subsidies received',
      'showvalues': '0',
      'data': [
        {
          'value': '28.0'
        },
        {
          'value': '35.2'
        },
        {
          'value': '23.9'
        },
        {
          'value': '11.8'
        },
        {
          'value': '18.0'
        },
        {
          'value': '26.9'
        },
        {
          'value': '11.1'
        },
        {
          'value': '11.2'
        },
        {
          'value': '24.0'
        },
        {
          'value': '18.9'
        },
        {
          'value': '35.6'
        },
        {
          'value': '37.9'
        },
        {
          'value': '12.9'
        }
      ]
    },
    {
      'seriesname': 'Total Population',
      'plottooltext': 'Population: $dataValue',
      'data': [
        {
          'value': '71045'
        },
        {
          'value': '52949'
        },
        {
          'value': '67474'
        },
        {
          'value': '111173'
        },
        {
          'value': '133762'
        },
        {
          'value': '130548'
        },
        {
          'value': '280195'
        },
        {
          'value': '173419'
        },
        {
          'value': '176578'
        },
        {
          'value': '105483'
        },
        {
          'value': '40211'
        },
        {
          'value': '117109'
        },
        {
          'value': '93466'
        },
        {
          'value': '36000'
        }
      ]
    }
  ]
};

@Component({
  selector: 'app-bars-linea',
  templateUrl: './bars-linea.component.html',
  styleUrls: ['./bars-linea.component.scss']
})
export class BarsLineaComponent implements OnInit {

  width = 600;
  height = 250;
  type = 'scrollcombidy2d';
  dataFormat = 'json';
  dataSource = data;

  constructor() { }

  ngOnInit() {
  }

}
