function solution(n) {
    const fibo=[0, 1];
    for(let i=0;i<n-1;i++){
        fibo.push((fibo[i]+fibo[i+1])%1234567);
    }
    return fibo[n] % 1234567;
}
