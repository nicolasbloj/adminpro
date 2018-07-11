import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  cambiarColor(color: string): void {
    console.log(color);
    let url = "assets/css/colors/" + color + ".css";
    this._document.getElementById('tema').setAttribute('href', url);
  }

}
