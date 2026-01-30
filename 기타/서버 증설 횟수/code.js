//경과 시간을 매번 증가시키는 것보다, 서버가 종료되는 시점이 언제인지를 저장하는 것이 효율적
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

// function solution(players, m, k) {
//     let answer = 0;
//     const servers = [];
//     let array = [1, 10, 100];
//     for(let player of players){
//         //현재 서버 지속시간 증가 및 서버 개수 구하기
//         let numOfServer = 0;
//         if(servers.length && servers[0][1]+1 > k) servers.shift();
//         for(let i=0;i<servers.length;i++){
//             servers[i][1]++;
//             numOfServer += servers[i][0];
//         }
//         //서버가 부족하면 추가(개수, 지속시간(1))
//         if(numOfServer< Math.floor(player/m)){
//             let need = Math.floor(player/m) - numOfServer;
//             servers.push([need, 1]);
//             answer += need;
//         }
//     }
//     return answer;
// }
