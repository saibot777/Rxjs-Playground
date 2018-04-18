import Rx from 'rxjs';

Rx.Observable
    .interval(100)
    .take(10)
    .last(x => x % 2 === 0)
    .subscribe(x => console.log(x));