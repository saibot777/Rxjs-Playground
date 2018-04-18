import Rx from 'rxjs';

Rx.Observable
    .throw()
    .subscribe({
        next: x => console.log("X value was emitted", x),
        error: x => console.log("Entered error state", x)
    });