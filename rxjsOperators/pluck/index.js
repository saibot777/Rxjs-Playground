import Rx from 'rxjs';

const friendsAPI = Rx.Observable
    .interval(1000)
    .map(x => ({name: `Friend #${x}`, mutualFriends: x * 2 + 1}))
    .pluck("name")
    .subscribe(x => console.log(x));
