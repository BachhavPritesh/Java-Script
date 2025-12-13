function findLCM(f, s) {
    let max = Math.max(f, s);

    for (let i = max; i < f * s; i++) {
        if (i % f == 0 && i % s ===0) {
            console.log(i);
            return; 
        }
    }
}

findLCM(33, 49);
