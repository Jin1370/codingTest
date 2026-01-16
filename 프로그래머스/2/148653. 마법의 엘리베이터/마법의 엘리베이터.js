function solution(storey) {
    let count = 0;
    while(storey){
        let ones = storey%10;
        let tens = Math.floor((storey%100)/10);
        if(ones<5 || (ones===5 && tens<5)){
            count += ones;
            storey = Math.floor(storey / 10);
        } else{
            count += (10-ones);
            storey = Math.floor(storey / 10) + 1;
        }
    }
    return count;
}