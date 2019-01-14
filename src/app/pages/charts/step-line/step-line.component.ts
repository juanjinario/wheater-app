import { Component, OnInit } from '@angular/core';

const DATA_INPUT = {
  "categories":[
     {
        "category":[
              {"label":"01-01-0001"},
              {"label":"02-01-0001"},
              {"label":"03-01-0001"},
              {"label":"04-01-0001"},
              {"label":"05-01-0001"},
              {"label":"06-01-0001"},
              {"label":"07-01-0001"},
              {"label":"08-01-0001"}
        ]
     }
  ],
  "dataset":[
     {
        "seriesname":"Evidencia_1",
        "data":[  
       { "value":"0"},
       { "value":"0.5"},
       { "value":"0.5"},
       { "value":"1"},
       { "value":"-1"},
       { "value":"-1"},
       { "value":"0.5"},
       { "value":"0.5"}
        ]
     },
     {
        "seriesname":"Evidencia_2",
        "data":[  
          { "value":"-1"},
          { "value":"-1"},
          { "value":"-1"},
          { "value":"0.5"},
          { "value":"0.5"},
          { "value":"0.5"},
          { "value":"-1"},
          { "value":"-1"}
        ]
     }
  ]
};

const data = {
  "chart": {
    "caption": "Estado Cumplimiento",
    "subcaption": `${DATA_INPUT.dataset[0].seriesname} - ${DATA_INPUT.dataset[1].seriesname}`,
    "showhovereffect": "1",
    "drawverticaljoints": "1",
    "useforwardsteps": "1",
    "canvaspadding": "5",
    "labelDisplay": "STAGGER",
    "plottooltext": "El estado en $label fue <b>$datavalue</b>",
    "labelStep":"2",
    "theme": "fusion"
  },
  "categories": DATA_INPUT.categories,
  "dataset": DATA_INPUT.dataset
};

@Component({
  selector: 'app-step-line',
  templateUrl: './step-line.component.html',
  styleUrls: ['./step-line.component.scss']
})
export class StepLineComponent implements OnInit {

  width = '100%';
  height = 400;
  type = 'msstepline';
  dataFormat = 'json';
  dataSource = data;

  constructor() { }

  ngOnInit() {
  }

}
