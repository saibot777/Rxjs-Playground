import Rx from 'rxjs';

Rx.Observable.interval(100)
    .first(x => x === 3)
    .subscribe(x => console.log(x));