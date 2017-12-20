import { Component, OnInit, ViewChildren } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { generate } from 'rxjs/observable/generate';
import { QueryList } from '@angular/core/src/linker/query_list';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-xmas-tree',
  templateUrl: './xmas-tree.component.html',
  styleUrls: ['./xmas-tree.component.css'],
  animations: [
    trigger('xmas', [
      state('false', style({ opacity: '0', visibility: 'hidden' })),
      state('true', style({ opacity: '1', visibility: 'visible', backgroundColor: "{{rgb}}"}), {params: {rgb: "white"}}),
      transition('false <=> true', animate('0.1s linear'))
    ])
  ]
})
export class XmasTreeComponent{

  public plugged: boolean;

  public animationConfig:any[];

  private lightIntervall: Subscription;

  @ViewChildren("bulp")
  private bulps:QueryList<ElementRef>;

  constructor() { 
    this.animationConfig=[];
  }

  public toggleXmasLight() {
    this.plugged = !this.plugged;

    if (this.plugged) {
      this.lightIntervall=Observable.interval(500).subscribe( n => {
        this.animationConfig = this.generateAnmationConfig ( this.animationConfig.length>0?this.animationConfig[0].value:false );
      })
    } else if (this.lightIntervall){
      this.lightIntervall.unsubscribe();
      this.animationConfig= this.generateAnmationConfig(true);
    }
  }

  private generateAnmationConfig(oldValue:boolean){
    let args=Array(this.bulps.length).fill(0).map( _ => {return {value: !oldValue, params: {rgb: this.generateRGBColors()}}});
    return args;
  }

  private generateRGBColors():string{
    let r= Math.floor(Math.random() * (255 - 0));
    let g= Math.floor(Math.random() * (255 - 0));
    let b= Math.floor(Math.random() * (255 - 0));
    return `rgb(${r},${g},${b}`;
  }
}
