import Rx from 'rxjs';

const range = Rx.Observable.range(1, 9);

range  
    .map(y => y * y)
    .subscribe(x => console.log(x));

const notificationAPI = Rx.Observable.interval(1000);

notificationAPI
    .mapTo({ type: "NOTIFICATION_ARRIVED" })
    .subscribe(x => console.log(x));