import Rx from 'rxjs';

const interval = Rx.Observable.interval(400);

interval
    .map(x => x * x)
    .do(x => console.log("Value after Map#1", x))
    .map(x => x / 3)
    .map(x => x * x * x)
    .map(x => x % 42)
    .subscribe(x => console.log(x));
