import Rx from 'rxjs';

// const range = Rx.Observable
//     .range(1, 9)
//     .filter(x => x % 2 === 0)
//     .subscribe(n => console.log(n));

// Async 
const rangeAsync = Rx.Observable
    .interval(400)
    .filter(x => x % 2 != 0)
    .subscribe(n => console.log(n));