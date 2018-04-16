import Rx from 'rxjs';

// const ticker = Rx.Observable.interval(1000);
const stopWatch = Rx.Observable.timer(2000, 1000);

// ticker.subscribe(x => console.log(x));
stopWatch.subscribe(x => console.log(x));