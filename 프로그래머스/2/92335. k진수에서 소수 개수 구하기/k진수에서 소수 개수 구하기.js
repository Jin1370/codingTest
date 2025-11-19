function solution(n, k) {
    let splitted = [];
    let count = 0;
    
    n = n.toString(k);
    n.split("0").forEach(x=>{if(x!=="") splitted.push(Number(x))});
    for(let num of splitted){
        let primeNum = true;
        if(num === 1) primeNum = false;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i === 0){
                primeNum = false;
                break;
            }
        }
        if(primeNum) count++;
    } 
    return count;
}