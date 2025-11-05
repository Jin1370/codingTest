function solution(s) {
    let subsets = [];
    let idx = -1;
    let num = 0;
    let tuple = []
    s = s.slice(1, -1) + ',';
    for(let ch of s){
        if(ch === '{'){
            subsets.push([]);
            idx++;
        } else if(ch ===','){
            subsets[idx].push(num);
            num = 0;
        } else if(ch !== '}'){ //ch가 숫자이면
            num = num * 10 + Number(ch);
        }
    }
    subsets.sort((a, b)=>a.length - b.length);
    //console.log(arr);
    
    const mySet = new Set();
    subsets.forEach(subset => {
        subset.forEach(num => {
            if(!mySet.has(num)){
                mySet.add(num);
                tuple.push(num);
            }
        })
    })
    return tuple;
}