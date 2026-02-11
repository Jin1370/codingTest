function solution(N, road, K){
    const adj = Array.from({length: N+1}, () => []);
    for(const [a, b, time] of road){
        adj[a].push({to:b, time});
        adj[b].push({to:a, time});
    }
    const distances = Array(N+1).fill(Infinity);
    distances[1] = 0;
    
    const queue = [{node:1, dist: 0}];
    
    while(queue.length > 0){
        queue.sort((a,b) => a.dist-b.dist);
        const {node, dist} = queue.shift();
        
        if(dist > distances[node]) continue;
        
        for(const edge of adj[node]){
            const cost = dist + edge.time;
            if(cost<distances[edge.to]){
                distances[edge.to] = cost;
                queue.push({node:edge.to, dist:cost});
            }
        }
    }
    
    return distances.filter(d => d <= K).length;
}
