import Rx from 'rxjs';

// Range Operator
const rangeObservable = Rx.Observable.range(1, 9);
rangeObservable
    .subscribe(e => console.log(`Range emitted ${e}`));

// Of Operator
Rx.Observable.of(
    1,2,3,'Four',5, [], {}, [1,2,3]
).subscribe(a => console.log(a));


