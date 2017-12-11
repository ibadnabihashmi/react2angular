import { Component, OnInit } from '@angular/core';
import { FeedService } from './services/feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private heroService: FeedService
  ) {}

  ngOnInit() {
    this.heroService.getFeed();
  }
}
