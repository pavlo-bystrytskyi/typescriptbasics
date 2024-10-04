export function task() {
    // 1
    const age: number = 38;
    // 2
    for (let i = 1; i <= age; i++) {
        console.log(i)
    }
    // 3
    if (age > 18) {
        console.log('The person is adult')
    } else {
        console.log('The person is not adult')
    }
    // 4
    const score: number = 0;
    // 5
    if (score !== 0) {
        console.log('Score is available')
    }
    //6
    if (score) {
        console.log('Score is truthy');
    } else {
        console.log('Score is falsy');
    }
    //7
    const username: string = '';
    //8
    if (username !== undefined) {
        console.log('Username is available');
    }
    //9
    if (username) {
        console.log('Username is truthy');
    } else {
        console.log('Username is falsy');
    }
    //10
    const isAdmin: boolean = false;
    //11
    if (isAdmin) {
        console.log('isAdmin is truthy');
    } else {
        console.log('isAdmin is falsy');
    }
    //12
    if (isAdmin === false) {
        console.log('isAdmin is false');
    }
}