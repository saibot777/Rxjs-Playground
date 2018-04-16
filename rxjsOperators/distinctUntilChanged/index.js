import Rx from 'rxjs';

Rx.Observable
    .interval(100)
    .map(x => ~~(x / 10))
    .distinctUntilChanged()
    .subscribe(x => console.log(x));