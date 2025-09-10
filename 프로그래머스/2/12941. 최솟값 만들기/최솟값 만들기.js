function solution(A,B){
    let sum=0;
    A.sort((a,b)=>a-b);
    B.sort((a,b)=>b-a);
    return A.reduce((acc, cur, idx) => {
        return sum += cur * B[idx]
        }, 0)
}