import { Component, OnInit } from '@angular/core';

const data = {
  "chart": {
    "caption": "Twitter Mentions",
    "yaxisname": "Number of mentions",
    "numbersuffix": "M",
    "subcaption": "(iPhone Vs Samsung)",
    "yaxismaxvalue": "2",
    "plottooltext": "$seriesName was mentioned <b>$dataValue</b> times on Twitter in $label",
    "theme": "fusion"
  },
  "categories": [
    {
      "category": [
        {
          "label": "2007"
        },
        {
          "label": "2008"
        },
        {
          "label": "2009"
        },
        {
          "label": "2010"
        },
        {
          "label": "2011"
        },
        {
          "label": "2012"
        },
        {
          "label": "2013"
        },
        {
          "label": "2014"
        },
        {
          "label": "2015"
        }
      ]
    }
  ],
  "dataset": [
    {
      "seriesname": "iPhone",
      "data": [
        {
          "value": "1.90"
        },
        {
          "value": "1.94"
        },
        {
          "value": "1.69"
        },
        {
          "value": "1.66"
        },
        {
          "value": "1.43"
        },
        {
          "value": "1.97"
        },
        {
          "value": "1.78"
        },
        {
          "value": "1.58"
        },
        {
          "value": "1.55"
        }
      ]
    },
    {
      "seriesname": "Samsung",
      "data": [
        {
          "value": "0.68"
        },
        {
          "value": "0.74"
        },
        {
          "value": "0.25"
        },
        {
          "value": "0.64"
        },
        {
          "value": "0.22"
        },
        {
          "value": "0.74"
        },
        {
          "value": "0.58"
        },
        {
          "value": "0.15"
        },
        {
          "value": "0.26"
        }
      ]
    },
    {
      "seriesname": "Blu",
      "data": [
        {
          "value": "0.38"
        },
        {
          "value": "0.44"
        },
        {
          "value": "0.55"
        },
        {
          "value": "0.50"
        },
        {
          "value": "0.40"
        },
        {
          "value": "0.50"
        },
        {
          "value": "0.22"
        },
        {
          "value": "0.33"
        },
        {
          "value": "0.26"
        }
      ]
    }
  ]
};


@Component({
  selector: 'app-spline-area',
  templateUrl: './spline-area.component.html',
  styleUrls: ['./spline-area.component.scss']
})
export class SplineAreaComponent implements OnInit {
  width = '100%';
      height = 400;
      type = 'mssplinearea';
      dataFormat = 'json';
      dataSource = data;

  constructor() { }

  ngOnInit() {
  }

}
