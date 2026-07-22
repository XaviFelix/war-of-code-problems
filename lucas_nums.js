const lucas = n => {
    // declare base values
    let a = 2;
    let b = 1;
    let c = 0;

    if (n === 0) return a;

    for(let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b
}
console.log(lucas(9));