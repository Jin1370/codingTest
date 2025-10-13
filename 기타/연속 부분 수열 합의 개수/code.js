function solution(elements) {
    const sumOfAll = new Set();
    const extendedElements = [...elements, ...elements];
    
    function getSum(length){
        for(let i=0;i<elements.length;i++){
            let sum = 0;
            for(let j=0;j<length;j++){
                sum+=extendedElements[i+j]
            }
            sumOfAll.add(sum);
        }
    }
    
    for(let i=1;i<=elements.length;i++){
        getSum(i);
    }
    
    return sumOfAll.size;
}
