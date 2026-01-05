function solution(queue1, queue2) {
    const connected = [...queue1, ...queue2];
    let p1 = 0;
    let p2 = queue1.length;
    let queue1_sum = queue1.reduce((acc, cur)=>acc+cur, 0);
    let queue2_sum = queue2.reduce((acc, cur)=>acc+cur, 0);
    let count = 0;
    
    while(count < connected.length * 4){
        if(queue1_sum === queue2_sum) return count;
        if(queue1_sum > queue2_sum){
            queue1_sum -= connected[p1];
            queue2_sum += connected[p1];
            p1 = (p1 + 1)%connected.length;
        }else{
            queue1_sum += connected[p2];
            queue2_sum -= connected[p2];
            p2 = (p2 + 1)%connected.length; 
        }
        count++;
    }
    return -1;
}