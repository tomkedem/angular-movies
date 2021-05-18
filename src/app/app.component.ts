import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheaters=[
      {
      title: 'Spider-Men',
      releaseDate: new Date(),
      price: 1400.99
    },
    {
      title: 'Moana',
      releaseDate: new Date('2016-11-14'),
      price: 458.99
    }
  ];

     this.moviesFutureReleases = [];
     //=[
     //  {
    //   title: 'Avatar',
    //   releaseDate: new Date(),
    //   price: 541.99
    // },
    // {
    //   title: 'Toy Story',
    //   releaseDate: new Date('2020-8-24'),
    //   price: 256.65
    // }
  //];
  }
  
  moviesInTheaters;
  moviesFutureReleases;
  title = 'angular-movies';
  display = true;
  duplicateNumber(n: number){
    return n*2;
  }
  hendleRating(rate:number){
    alert(`The user selected ${rate}`);
  }
}
