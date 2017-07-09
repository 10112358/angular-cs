import { Component, OnInit, OnChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { SearchService } from './searchtest.service';
import { SearchResult } from './model/search-model';
import { KeyValuePipe } from '../utils/keyvalue-pipe';

import {v1} from './test';

@Component({
  selector: 'searchtest',
  templateUrl: './searchtest.component.html',
  styleUrls: ['../../assets/css/main-test.scss']
})
export class SearchtestComponent {
  public result:SearchResult = new SearchResult();
  public searchTerm:Subject<string> = new Subject<string>();
  public suggestions:Object;
public query:string;

  constructor(
    public searchService: SearchService
  ){
    // this.searchService.suggest(this.searchTerm)
    // .subscribe(res => {
    //   this.suggestions = res.Results;
    //})
  }
  ngOnInit(){
    // console.log('hello');
    // window.onload = function (){
    //   console.log('onload');
    // };
    // console.log('end');
    v1();
    
  }

  public Search():void{
    this.searchService.search(this.query, this.result);
    console.log('after call service result.total = ' + this.result.total);
    console.log('after call service result.took = ' + this.result.took);
  }

}