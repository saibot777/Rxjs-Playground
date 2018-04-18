import Rx from 'rxjs';

const bluePostFeed = Rx.Observable
    .interval(1000)
    .map(x => `Blue Post Article #${x}`);

const redPostFeed = Rx.Observable
    .interval(650)
    .map(x => `Red Post Article #${x}`);   

const greenPostFeed = Rx.Observable
    .interval(1650)
    .map(x => `Green Post Article #${x}`);       

// bluePostFeed
//     .subscribe(x => console.log(x));

Rx.Observable
    .of(
        bluePostFeed,
        redPostFeed,
        greenPostFeed
    )
    .mergeAll()
    .subscribe(x => console.log(x));