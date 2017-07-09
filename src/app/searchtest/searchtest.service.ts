import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';

import { SearchResult } from './model/search-model';

@Injectable()
export class SearchService {
  public searchURL = 'http://localhost:54221/api/search?q=';
  tmpurl = 'https://api.cdnjs.com/libraries?search=';
//   public subject: Subject<SearchResult> = new Subject<SearchResult>();
  
  constructor(public http:Http){}

  public search(query: string, res:SearchResult){
      console.log("query string is " + query);
      this.http
            .get(this.searchURL + query)
            .map((response: Response) => response.json())
            .subscribe(
                data => {
                    console.log("search success>"+data);
                    console.log('before res.total = ' + res.total);
                    console.log('before res.took = ' + res.total);
                    
                    
                    res.items = data.Results;
                    res.aggs = data.AggregationsByTags;
                    res.total = 0;

                    if (data.Results.length == 0){
                        res.message = 'no result';
                    }
                    else{
                        res.total = data.Total;
                        res.took = data.ElapsedMilliseconds;
                    }
                  
                    console.log('after res.total = ' + res.total);
                    console.log('after res.took = ' + res.total);
                    //console.log('after res.pagsize = ' + res.pagesize);
                    //console.log('after res.page = ' + res.page);                                     
                },
                error => {
                    console.error(error);
                }
            );
            // this.getSuggestions(query).map((response: Response) => response.json())
            // .subscribe(
            //     data => {
            //         res.suggested = data.data;
            //         console.log('suggestions are' + res.suggested);
            //     }
            // )
            
  }

//   public getSuggestions(query:string){
//       return this.http.get(this.searchURL + query);
//   }
  suggest(terms: Observable<string>){
      return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.suggestEntries(term));
  }
  suggestEntries(term){
      return this.http.get(this.searchURL+term)
      .map(res => res.json());
  }

}
