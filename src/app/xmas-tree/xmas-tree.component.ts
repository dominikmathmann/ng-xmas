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
      transition('false <=> true', animate('0.1s linear'))
    ])
  ]
})
export class XmasTreeComponent implements OnInit {

  public plugged: boolean;

  public lightOn: boolean;

  public colorClasses=[
    "gold","blueviolet","white","crimson","blue", "blueviolet", "palevioletred", "gold", "blue", "chocolate", "white", "crimson", "blueviolet"
  ]

  private lightIntervall: Subscription;

  constructor() { }

  private toggleXmasLight() {
    this.plugged = !this.plugged;
    this.lightOn = this.plugged;

    if (this.plugged) {
      this.lightIntervall=Observable.interval(800).subscribe( n => {
        this.lightOn=!this.lightOn;
        setTimeout( () => this.shuffleArray(this.colorClasses), 200);
      })
    } else if (this.lightIntervall){
      this.lightIntervall.unsubscribe();
    }
  }

  ngOnInit() {
  }

  /**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
private  shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}


}
