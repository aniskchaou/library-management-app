import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent extends URLLoader implements OnInit {

  constructor() {
    super()
  }

  ngOnInit(): void {
    super.loadScripts()
  }

  sendSMS() {
    super.show('Information', 'cette fonctionalités est en cours de développement.', 'info')
  }

  sendEmail() {
    super.show('Information', 'cette fonctionalités est en cours de développement.', 'info')
  }

}
