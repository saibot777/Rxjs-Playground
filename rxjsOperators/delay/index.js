import Rx from 'rxjs';

Rx.Observable.of(42)
    .do(() => console.log("What is the this?"))
    .delay(1200)
    .do(() => console.log("TELL MEE!!!"))
    .delay(2000)
    .subscribe(x => console.log(x));

    
console.log("STARTING SECOND SEQUENCE")
Rx.Observable.range(1, 9)
    .delayWhen(x => Rx.Observable.timer(x * 1000))
    .subscribe(x => console.log(x));
