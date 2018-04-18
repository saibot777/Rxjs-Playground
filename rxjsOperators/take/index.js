import Rx from 'rxjs';

Rx.Observable
    // .range(1, 9)
    // .take(5)
    .interval(100)
    .takeUntil(Rx.Observable.timer(1000))
    .subscribe(x => console.log(x));
