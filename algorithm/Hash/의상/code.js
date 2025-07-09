function solution(clothes) {
    const myMap = new Map();
    for(let cloth of clothes)
        myMap.set(cloth[1], (myMap.get(cloth[1]) || 0) +1);
    
    let clothNums = [];
    for(let clothNum of myMap.values())
        clothNums.push(clothNum+1);
    
    return (clothNums.reduce((acc, cur)=> acc * cur, 1))-1;
}
