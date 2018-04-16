import Rx from 'rxjs';

const customObservable = Rx.Observable.create(observer => {
    observer.next(42);
    setInterval(() => {
        observer.next("FLOON");
    }, 500)
});

customObservable
    .subscribe({
        next: x => console.log("NEXT!", x),
    });