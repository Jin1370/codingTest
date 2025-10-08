function solution(n) {
    let fibonacci = [1, 1];
    for(let i=0;i<=n-2;i++){
        fibonacci.push((fibonacci[i]+fibonacci[i+1])%1234567);
    }
    return fibonacci[n];
}
