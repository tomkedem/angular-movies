import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { IndexMovieTheaterComponent } from './movie-theaters/index-movie-theater/index-movie-theater.component';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';

const routes: Routes = [
  {path:'',component: HomeComponent},

  {path:'genres',component: IndexGenresComponent},
  {path:'genres/create',component: CreateGenreComponent},

  
  {path:'actors',component: IndexActorsComponent},
  {path:'actors/create',component: CreateActorsComponent},

  {path:'movietheaters',component: IndexMovieTheaterComponent},
  {path:'movietheaters/create',component: CreateMovieTheaterComponent},

  {path:'movies/create',component: CreateMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
