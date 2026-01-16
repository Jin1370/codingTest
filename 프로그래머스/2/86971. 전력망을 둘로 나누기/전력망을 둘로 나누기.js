function solution(n, wires) {
    //인접리스트로 그래프 만들기
    const graph = Array.from({length: n+1}, ()=>[]);
    wires.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    })
    //전선을 하나씩 끊으면서 차이의 최솟값 찾기
    let min = n;
    for(let [a,b] of wires){
        min = Math.min(getDiff(a, b), min);
    }
    //특정 전선 끊었을 때 전력망 개수 차이 찾기
    function getDiff(a, b){
        const visited = Array(n+1).fill(false);
        visited[b] = true; //방문으로 처리->전선을 끊음
        const queue = [a];
        visited[a] = true;
        let count = 0;
        while(queue.length){
            let cur = queue.shift();
            count++;
            graph[cur].forEach(x=>{
                if(!visited[x]){
                    visited[x] = true;
                    queue.push(x);
                }
            })
        }
        return Math.abs(count - (n - count));
    }
    return min;
}