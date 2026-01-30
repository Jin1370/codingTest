function solution(players, m, k) {
    let answer = 0;
    let activeServerCount = 0;
    const queue = [];
    
    for(let i=0;i<players.length;i++){
        const currentTime = i;
        const requiredServers = Math.floor(players[i]/m);
        
        //만료된 서버 제거
        while(queue.length>0 && queue[0][0]<=currentTime){
            const [expireTime, count] = queue.shift();
            activeServerCount -= count;
        }
        //서버가 부족한지 확인
        if(activeServerCount < requiredServers){
            const needToAdd = requiredServers-activeServerCount;
            queue.push([currentTime+k, needToAdd]);
            answer += needToAdd;
            activeServerCount += needToAdd;
        }
    }
    return answer;
}