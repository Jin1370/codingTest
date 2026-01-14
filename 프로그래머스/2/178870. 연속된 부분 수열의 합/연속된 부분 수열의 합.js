function solution(sequence, k) {
    let p1 = sequence.length-1;
    let p2 = sequence.length-1;
    let sum = sequence[sequence.length-1];
    while(sum!==k){
        if(sum>k){
            if(p1===p2){
                p1--;
                sum+=sequence[p1];
            }
            sum-=sequence[p2];
            p2--;
        } else if(sum<k){
            p1--;
            sum+=sequence[p1];
        }
    }
    while(sequence[p2] === sequence[p1-1]){
        p1--;
        p2--;
    }
    return [p1, p2];
}