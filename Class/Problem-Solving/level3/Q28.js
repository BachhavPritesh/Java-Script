function printFibonacci(N) {
    let a = 0, b = 1;

    for (let i = 0; i < N; i++) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}


printFibonacci(5);

