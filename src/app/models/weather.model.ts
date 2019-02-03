export class Weather {
    constructor(public cityName: string,
                public temp: string,
                public type: string,
                public tempMin: string = '',
                public tempMax: string = '',
                public img: string = '',
                public date: string = '',
                public humidity: string = '',
                public wind: string = '',
                public visibility: string = '') {}
  }
