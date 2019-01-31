import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  private _icon = '';
  private _text = '';
  private _subtext = '';

  @Input()
  set icon(icon: string) {
    this._icon = (icon && icon.trim()) || '';
  }

  @Input()
  set text(text: string) {
    this._text = (text && text.trim()) || '<no title>';
  }

  @Input()
  set subtext(subtext: string) {
    this._subtext = (subtext && subtext.trim()) || '';
  }

  get icon(): string { return this._icon; }
  get text(): string { return this._text; }
  get subtext(): string { return this._subtext; }

  constructor() { }

  ngOnInit() { }

}
