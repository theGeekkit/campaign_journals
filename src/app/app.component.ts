import { Component } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'home';
  title = 'campaign_journals';
  imageUrl = 'url(https://i.ibb.co/0nyBdyj/pexels-pixabay-235985.jpg)';

  constructor(private router: Router) {
    router.events
    .pipe(filter(event => event instanceof NavigationStart), map(e => e as NavigationStart))
    .subscribe((event: NavigationStart) => {
      console.log(event)
      if(event.url === '/home') {
        this.imageUrl = 'url(https://i.ibb.co/0nyBdyj/pexels-pixabay-235985.jpg)'
      } else if(event.url === '/briarheart') {
        this.imageUrl = 'url(https://i.ibb.co/b2rqPz1/92f59995fb654b6f476e532970a164ce.jpg)'
      }
    }

    )};
}
