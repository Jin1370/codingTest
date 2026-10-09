function solution(players, m, k) {
    let count = 0;
    let s = [];
    for(let i=0;i<players.length;i++){
        if(players[i] >= (s.length+1) * m){
            let needed = Math.floor(players[i]/m)-s.length;
            for(let j=0;j<needed;j++){
                s.push(k);
                count++;
            }
        }
        s = s.map(x => x-1);
        while(s[0]==0){
            s.shift();
        }
    }
    return count;
}