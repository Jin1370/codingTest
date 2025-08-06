function solution(maps) {
    function bfs(startX, startY){
        const queue = [[startX, startY]];
        const n = maps.length;
        const m = maps[0].length;
        const visited = Array.from({length: n}, ()=>Array(m).fill(false));
        const distance = Array.from({length: n}, ()=>Array(m).fill(0));
        const dx = [-1, 1, 0, 0];
        const dy = [0, 0, -1, 1];
        
        visited[startX][startY] = true;
        distance[startX][startY] = 1;
        
        while(queue.length > 0){
            const [x, y] = queue.shift();

            for(let i=0;i<4;i++){
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if(nx>=0 && ny>=0 && nx<n && ny<m && maps[nx][ny]===1 && !visited[nx][ny]){
                    visited[nx][ny] = true;
                    distance[nx][ny] = distance[x][y] + 1;
                    queue.push([nx, ny]);
                }
            }
        }
        return distance[n-1][m-1] || -1;
    }
    
    return bfs(0,0);
}
