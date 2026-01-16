function solution(storey) {
    let count = 0;
    while(storey){
        let current = storey%10;
        let next = Math.floor(storey/10)%10;
        if(current<5 || (current===5 && next<5)){
            count += current;
            storey = Math.floor(storey / 10);
        } else{
            count += (10-current);
            storey = Math.floor(storey / 10) + 1;
        }
    }
    return count;
}