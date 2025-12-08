function solution(x, y, n) {
    let count = 1;
    let queue = [x];
    const mySet = new Set();
    if(x===y) return 0;
    while(queue.length > 0){
        let length =queue.length;
        for(let i=0;i<length;i++){
            let x = queue.shift();
            if(x+n===y || x*2===y || x*3===y) return count;
            if(!mySet.has(x+n) && (x+n < y)){
                queue.push(x+n);
                mySet.add(x+n);
            }
            if(!mySet.has(x*2) && (x*2 < y)){
                queue.push(x*2);
                mySet.add(x*2);
            }
            if(!mySet.has(x*3) && (x*3 <y)){
                queue.push(x*3);
                mySet.add(x*3);
            }
        }
        count++;
    }
    return -1;
}
