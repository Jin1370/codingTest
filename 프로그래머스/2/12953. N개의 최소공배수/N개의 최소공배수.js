function solution(arr) {
    const max = Math.max(...arr);
    let n = max;
    while(1){
        let commonMultiple = true;
        for(let i of arr){
            if(n%i!==0){
                commonMultiple = false;
                break;
            }
        }
        if(commonMultiple===true) return n;
        n += max;
    }
}