function solution(fees, records) {
    const [basicTime, basicFare, unitTime, unitFare] = fees;
    const myMap = new Map();
    let answer = [];
    
    records.forEach(record => {
        let [time, carNum, inOut] = record.split(" ");
        time = time.split(":").map(x => Number(x));
        time = time[0] * 60 + time[1];
        if(myMap.has(carNum)){
            myMap.get(carNum).push(time);
        } else myMap.set(carNum, [time]);
    })
    
    for(let carNum of myMap.keys()){
        let times = myMap.get(carNum);
        if(times.length%2!==0) times.push(1439); //입차로 끝난 경우 23:59 출차로 기록
        
        let totalTime = 0;
        for(let i=0;i<times.length;i+=2){
            totalTime+=times[i+1]-times[i]; //(출차시간-입차시간)의 합산
        }
        
        let fee = totalTime > basicTime ? 
            basicFare + Math.ceil((totalTime-basicTime)/unitTime)*unitFare : 
            basicFare;
        myMap.set(carNum, fee);
    }
    
    const sortedMap = new Map([...myMap.entries()].sort((a,b)=>a[0]-b[0]));
    for(let value of sortedMap.values()) answer.push(value);
    return answer;
}