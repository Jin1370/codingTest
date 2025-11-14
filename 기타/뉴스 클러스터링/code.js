function solution(str1, str2) {
    function decomposite(map, string){
        for(let i=0;i<string.length-1;i++){
            let str = (string[i]+string[i+1]).toLowerCase();
            if (str.match(/^[a-z]{2}$/)){
                map.set(str, map.get(str)+1||1);
            }
        }
    }
    function numOfElement(map){
        let count = 0;
        for(let value of map.values())
            count += value;
        return count;
    }
    
    let numOfIntersect = 0;
    let numOfUnion = 0;
    let similarity;
    const map1 = new Map();
    const map2 = new Map();
    
    decomposite(map1, str1);
    decomposite(map2, str2);
    for(let str of map1.keys()){
        if(map2.get(str)){
            numOfIntersect += Math.min(map1.get(str), map2.get(str));
        }
    }
    numOfUnion = numOfElement(map1) + numOfElement(map2) - numOfIntersect;
    similarity = numOfIntersect / numOfUnion;
    if(map1.size === 0 && map2.size === 0) similarity = 1;
    
    return parseInt(similarity * 65536);
}
