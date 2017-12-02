import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Injectable } from '@angular/core'


@Injectable()
export class HomeService {
	constructor(private http: Http){
}

returnMainService() {
	return this.http.get(
		'http://0.0.0.0:6543/'
	)
	.map((res: Response) => res.json())
}
}