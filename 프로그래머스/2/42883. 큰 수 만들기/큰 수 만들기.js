function solution(number, k) {
    const stack = [];
    let count = 0;
    
    for(let i=0;i<number.length;i++){
        let cur = number[i];
        while(count<k && stack.length>0 && stack[stack.length-1] < cur){
            stack.pop();
            count++;
        }
        stack.push(cur);
    }
    
    return stack.splice(0, number.length-k).join("");
}