function solution(participant, completion) {
    const myMap = new Map();
    for(let name of completion){
        myMap.set(name, (myMap.get(name) || 0)+1);
    }
    for(let name of participant){
        if(!myMap.get(name)) return name;
        myMap.set(name, myMap.get(name)-1);
    }
}
