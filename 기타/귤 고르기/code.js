function solution(k, tangerine) {
    const numOfTypes = new Map();
    let sum = 0;
    tangerine.forEach(tgr => numOfTypes.set(tgr, (numOfTypes.get(tgr)||0)+1));
    const sortedNum = Array.from(numOfTypes.values()).sort((a, b)=>b-a);
    
    for(let i=0;i<sortedNum.length;i++){
        sum += sortedNum[i];
        if(sum >= k) return i+1;
    }
}
