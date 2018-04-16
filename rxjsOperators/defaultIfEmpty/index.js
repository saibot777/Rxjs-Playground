import Rx from 'rxjs';

Rx.Observable
    .empty()
    .defaultIfEmpty(42)
    .subscribe(x => console.log("WHERE IS THE VALUE!?", x));