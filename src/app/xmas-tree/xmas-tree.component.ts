import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-xmas-tree',
  templateUrl: './xmas-tree.component.html',
  styleUrls: ['./xmas-tree.component.css'],
  animations: [
    trigger('xmas', [
      state('false', style({ opacity: '0', visibility: 'hidden' })),
      state('true', style({ opacity: '1', visibility: 'visible' })),
      transition('false <=> true', animate('0.2s linear'))
    ])
  ]
})
export class XmasTreeComponent implements OnInit {

  public plugged: boolean;

  public lightOn: boolean;

  lightIntervall: Subscription;

  constructor() { }

  private toggleXmasLight() {
    this.plugged = !this.plugged;
    this.lightOn = this.plugged;

    if (this.plugged) {
      this.lightIntervall=Observable.interval(1000).subscribe( n => {
        this.lightOn=!this.lightOn;
      })
    } else if (this.lightIntervall){
      this.lightIntervall.unsubscribe();
    }
  }

  ngOnInit() {
  }


}
