import Rx from 'rxjs';

console.info("MADE API REQUEST")
Rx.Observable.timer(4000, 500)
    .map(x => x + 1)
    .startWith(0)
    .subscribe(x => console.log("REQUEST COMPLETE", x))