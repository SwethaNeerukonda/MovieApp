import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Movie app';
  public moviesList: any[] = [];
  public pageCount: number;
  public pagesList: any[] = [];
  public processStatus: string;
  public isListRetieved: boolean = false;

  constructor(public appService: AppService) { }

  public ngOnInit() {
    // call the method to dislay the number of pages from the data
    this.appService.getMoviesCount().subscribe(data => {
      this.pageCount = data;
      for (let i = 1; i <= this.pageCount; i++) {
        this.pagesList.push(i);
      }
    });
  }

  public getMoviesList() {
      // making the movies list empty because we are calling the web service for every 2 seconds

        this.moviesList = [];
        this.appService.getMovies().subscribe(data => {
          this.moviesList = data;
          this.isListRetieved = true;
        });
  }


  public onPageClick(value: any) {
  if (!this.isListRetieved) {
    setInterval(() => {
      this.getMoviesList();
    }, 3000);
  }
    this.appService.startProcess(value).subscribe(data => {
      console.log('The process status is:', data);
      this.processStatus = data;
    });
  }
}
