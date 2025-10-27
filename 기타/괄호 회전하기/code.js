function solution(s) {
    let count = 0;
    for(let i=0;i<s.length;i++){
        let stack = [];
        for(let j=0;j<s.length;j++){
            let ch = s[(i+j)%s.length];
                if((ch === ']' && stack.at(-1)==='[') 
                   || (ch === '}' && stack.at(-1)==='{') 
                   || (ch === ')' && stack.at(-1)==='(')){
                    stack.pop();
            }
            else stack.push(s[(i+j)%s.length]);
        }
        if(stack.length===0) count++;
    }
    return count;
}
