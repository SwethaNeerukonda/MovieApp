import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'  })
};

const httpOptions1 = {
  headers: new HttpHeaders({ 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin' : '*'  })
};

@Injectable()
export class AppService {

  constructor(private http: HttpClient ) {}


  // Uses http.get() to load data from a single API endpoint
  public getMovies(): Observable<any>  {
    return this.http.get('http://localhost:8090/movieapp/v1/movies', httpOptions);
  }

  public getMoviesCount(): Observable<any> {
    return this.http.get('http://localhost:8090/movieapp/v1/movies/count', httpOptions);
  }

  /**
   *
   *Method to kick off job
   */
  public startProcess(pageNumber: string): Observable<any> {
    return this.http.get('http://localhost:8090/movieapp/v1/process/start?page=' + pageNumber, httpOptions1);
  }

}
