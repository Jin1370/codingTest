function solution(arrayA, arrayB) {
    function findGCD(array){
        while(array.length){
            array.sort((a,b)=>b-a);
            while(array[array.length-1]===0){
                array.pop();
            }
            if(array.length===1) return array[0];
            for(let i=0;i<array.length-1;i++){
                array[i] %= array[array.length-1]; 
            }
        }
    }
    
    let gcd_A = findGCD(arrayA.slice());
    let gcd_B = findGCD(arrayB.slice());

    let divided = false;
    for(let elem of arrayB){
        if(elem % gcd_A === 0){
            divided = true;
            break;
        }
    }
    if(divided) gcd_A=0;
        
    divided = false;
    for(let elem of arrayA){
        if(elem % gcd_B === 0){
            divided = true;
            break;
        }
    }
    if(divided) gcd_B=0;
    
    return Math.max(gcd_A, gcd_B);
}