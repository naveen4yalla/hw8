import { Component, OnInit,ViewChild} from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { TmdbCallService } from 'src/app/service/tmdb-call.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  user: any;
  err:any;
  @ViewChild('carousel', { static: true })
    carousel!: NgbCarousel;
  constructor( private TmdbCallService: TmdbCallService) { 
   
  }
  

  ngOnInit(): void {
    
    this.TmdbCallService.getMainCarousel().subscribe(
      (user: any) => {
        console.log(user);
       
      },
      (err) => {
       console.log("error message"+err)
      },
    );
    // this.TmdbCallService.getPopularMovies().subscribe();
    // this.TmdbCallService.getTrendingMovies().subscribe();
    // this.TmdbCallService.getTopratedMovies().subscribe();
    
    // this.TmdbCallService.getTrendingTvShows().subscribe();
    // this.TmdbCallService.getTopRatedTvshows().subscribe();
    // this.TmdbCallService.getPopularTvShows().subscribe();

    
    
  }
  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
