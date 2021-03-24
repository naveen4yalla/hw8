import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TmdbCallService {
  private url = "https://randomuser.me/api";
  constructor(private http: HttpClient) { }
  getMainCarousel(){
    return this.http.get("api/")

  }//Main carousel ends here
  getTrendingMovies(){

  }//Trending Movies end here
  getPopularMovies(){

  }//Popular Movies end here
  getTopratedMovies(){

  }//top rated tv shows end here
  
  
  
  
  
  //Tv shows starts here
  getTrendingTvShows(){

  }//TrendingTvshows ends here
  getPopularTvShows(){

  }//PopularTvShows ends here
  getTopRatedTvshows(){

  }//Top RatedTvshows ends here

}
