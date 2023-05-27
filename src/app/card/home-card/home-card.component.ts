import { Component } from '@angular/core';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.css']
})
export class HomeCardComponent  implements OnDestroy {

  constructor() {
  }

  ngOnDestroy(): void {
  }

}
