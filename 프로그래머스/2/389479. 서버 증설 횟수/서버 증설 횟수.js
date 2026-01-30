function solution(players, m, k) {
    let answer = 0;
    const servers = [];
    let array = [1, 10, 100];
    for(let player of players){
        //현재 서버 지속시간 증가 및 서버 개수 구하기
        let numOfServer = 0;
        if(servers.length && servers[0][1]+1 > k) servers.shift();
        for(let i=0;i<servers.length;i++){
            servers[i][1]++;
            numOfServer += servers[i][0];
        }
        //서버가 부족하면 추가(개수, 지속시간(1))
        if(numOfServer< Math.floor(player/m)){
            let need = Math.floor(player/m) - numOfServer;
            servers.push([need, 1]);
            answer += need;
        }
    }
    return answer;
}