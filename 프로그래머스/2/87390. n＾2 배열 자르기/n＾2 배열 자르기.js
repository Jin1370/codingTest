function solution(n, left, right) {
    if(n===1 && left===1 && right===1) return [1];
    let arr = [];
    for(let i=Math.floor(left/n)+1;i<=Math.ceil(right/n);i++){
        //i를 i개 push
        for(let j=0;j<i;j++){
            arr.push(i);
        }
        //i+1부터 n까지의 수를 1개씩 push
        for(let k=i+1;k<=n;k++){
            arr.push(k);
        }
    }
    return arr.slice(left%n, left%n+(right-left)+1);
}
