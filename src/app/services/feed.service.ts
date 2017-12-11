import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Job } from '../job/job';

import { from } from 'rxjs/observable/of';
import { catchError, map, tap, pluck } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'key': 'myuniquekey'
    })
};

@Injectable()
export class FeedService {
    constructor(
        private http: HttpClient
    ) {}

    getFeed() {
        this.http.get<any>(`http://139.59.58.18:3001/api/v1/feed/getFeed`, httpOptions)
        .pipe(
            of(map(obj => obj.resp.hits))
        ).subscribe((response) => {
            console.log(response);
        });
    }
}
