function solution(record) {
    const answer = [];
    const myMap = new Map();
    
    record.forEach(record => {
        record = record.split(" ");
        let [inout, uid, name] = [record[0], record[1], record[2]];
        if(inout === "Enter" || inout === "Change"){
            myMap.set(uid, name);
        }
    })
    
    record.forEach(record => {
        record = record.split(" ");
        let [inout, uid, name] = [record[0], record[1], record[2]];
        if(inout === "Enter"){
            answer.push(`${myMap.get(uid)}님이 들어왔습니다.`);
        } else if(inout === "Leave"){
            answer.push(`${myMap.get(uid)}님이 나갔습니다.`);
        }
    })

    return answer;  
    
}