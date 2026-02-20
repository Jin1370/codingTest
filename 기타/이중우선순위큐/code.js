function solution(operations) {
    const queue = [];
    for(let oper of operations){
        let [type, num] = oper.split(" ");
        if(type==="I"){
            queue.push(Number(num));
            queue.sort((a,b)=> a-b);
        } else{
            if(num==="-1") queue.shift();
            else queue.pop();
        }
    }
    return queue.length>0 ? [queue[queue.length-1], queue[0]] : [0, 0];
}
