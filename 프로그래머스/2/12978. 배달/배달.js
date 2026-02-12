function solution(N, road, K){
    const distance = Array(N+1).fill(Infinity);
    distance[1] = 0;
    const adj = Array.from({length: N+1}, ()=>[]);
    road.forEach(([from, to, dist]) => {
        adj[from].push({to, dist});
        adj[to].push({to:from, dist});
    })
    
    const queue = [{node:1, dist:0}];
    
    while(queue.length){
        queue.sort((a,b)=>b.dist-a.dist);
        const {node, dist} = queue.pop();
        if(dist > distance[node]) continue;
        for(let edge of adj[node]){
            if(distance[edge.to] > dist + edge.dist){
                const minDist = dist + edge.dist;
                distance[edge.to] = minDist;
                queue.push({node:edge.to, dist:minDist});
            }
        }
    }
    return distance.filter(d => d<=K).length;
}