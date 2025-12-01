function solution(msg) {
    const myMap = new Map();
    let idx = 1;
    let answer = [];
    for(let i=65;i<=90;i++){
        myMap.set(String.fromCharCode(i), idx++);
    }
    
    for(let i=0;i<msg.length;i++){
        let w = msg[i];
        let prevw = msg[i];
        let n = 0;
        while(myMap.has(w)){
            prevw = w;
            w += msg[i + (++n)];
        }
        i+=n-1;
        if(i!==msg.length-1)
            myMap.set(w, idx++);
        answer.push(myMap.get(prevw));
    }
    
    for(let i of myMap.keys()) console.log(i, myMap.get(i));
    
    return answer;
}