import { environment } from './../../environments/environment';

export class ConstUrl {

  public static KEY = 'a063b43e80c69d8f7e66df7d3e8dbfc9';
  public static APPID = 'appid';
  public static DATA = 'data';
  public static VERSION = '2.5';
  public static BASE_URL_WD = environment.server_url;
  public static BASE_URL = environment.server_url + '/' + ConstUrl.DATA + '/' + ConstUrl.VERSION + '/';

  public static WEATHER = 'weather';
  public static FORECAST = 'forecast';
  public static UNITS = 'units';

  public static LOGIN = 'login';
  public static USERS = 'users';

}
