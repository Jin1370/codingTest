function solution(topping) {
    let count = 0;
    const myMap1 = new Map();
    const myMap2 = new Map();
    for(let top of topping){
        myMap2.set(top, myMap2.get(top)+1 || 1);
    }
    
    for(let top of topping){
        myMap1.set(top, myMap1.get(top)+1 || 1);
        if(myMap2.has(top)){
            myMap2.set(top, myMap2.get(top)-1);
            if(myMap2.get(top)===0) myMap2.delete(top);
        }
        if(myMap1.size === myMap2.size) count++;
    }
    return count;
}