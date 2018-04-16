import Rx from 'rxjs';

const range = Rx.Observable.range(1, 9);

range
    .map(x => x * 2)
    .do(x => console.log("Value::", x))
    .every(x => x % 2 === 0)
    .subscribe(y => console.log(y));