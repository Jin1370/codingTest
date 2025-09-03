function solution(numbers) {
    var answer = [];
    const mySet = new Set();
    
    for(let i=0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++){
            let sum = numbers[i] + numbers[j];
            if(!mySet.has(sum)) mySet.add(sum);
        }
    }
    return [...mySet.values()].sort((a,b)=>a-b);
}