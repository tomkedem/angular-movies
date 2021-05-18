import { OnDestroy, SimpleChanges } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { DoCheck } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { RetingComponent } from '../utilities/reting/reting.component';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css']
})
export class LifecycletestComponent implements OnInit,OnChanges,OnDestroy,
  DoCheck,AfterViewInit {
  
    @Input()
    title: string;
    @ViewChild(RetingComponent)
    rating:RetingComponent;

    timer: ReturnType<typeof setInterval>;
  // Is not a life cycle event
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
    console.log(changes);
  }

  ngOnDestroy(): void {
    console.log('on destroy');
    clearInterval(this.timer);
  }
  ngDoCheck(): void {
    console.log('on docheck');
  }

  ngAfterViewInit(): void {
    console.log('on after view init');
    console.log(this.rating);
  }

  ngOnInit(): void {
    console.log('on init');
    console.log(this.rating);
    this.timer = setInterval(() => console.log(new Date()),1000);
  }
}
