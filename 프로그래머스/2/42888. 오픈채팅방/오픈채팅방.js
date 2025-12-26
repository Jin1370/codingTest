function solution(record) {
    const answer = [];
    const myMap = new Map();
    
    record.forEach(record => {
        let [inout, uid, name] = record.split(" ");
        if(inout === "Enter" || inout === "Change"){
            myMap.set(uid, name);
        }
    })
    
    record.forEach(record => {
        let [inout, uid, name] = record.split(" ");
        if(inout === "Enter") answer.push(`${myMap.get(uid)}님이 들어왔습니다.`);
        else if(inout === "Leave") answer.push(`${myMap.get(uid)}님이 나갔습니다.`);
    })

    return answer;  
}