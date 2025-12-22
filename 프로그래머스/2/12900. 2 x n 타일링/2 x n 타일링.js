function solution(n) {
    let prev = 2;
    let prev2 = 1;
    for(let i=0;i<n-2;i++){
        let temp = prev;
        let sum = prev + prev2;
        prev = (sum > 1000000007) ? sum%1000000007 : sum;
        prev2 = temp;
    }
    return prev;
}