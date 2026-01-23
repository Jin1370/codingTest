function solution(maps) {
    const [rowSize, colSize] = [maps.length, maps[0].length];
    
    const findWay = (startNode, goal) => {
        const visited = Array.from({length:rowSize}, ()=>Array(colSize).fill(false));
        const [startX, startY] = startNode;
        const queue = [[startX, startY, 0]];
        
        while(queue.length>0){
            let [x, y, count] = queue.shift();
            if(goal === maps[x][y] || goal === maps[x][y])
                return [count, [x,y]];
            const dx = [-1, 0, 1, 0];
            const dy = [0, 1, 0, -1];
            for(let i=0;i<4;i++){
                let nx = x+dx[i];
                let ny = y+dy[i];
                if(0<=nx && nx<rowSize && 0<=ny && ny<colSize && visited[nx][ny]!==true && maps[nx][ny]!=="X"){
                    queue.push([nx, ny, count+1]);
                    visited[nx][ny] = true; //큐에 중복으로 넣는 것을 대비해 미리 방문처리
                }
            }
        }
        return -1;
    }
    
    let startPoint = [0,0];
    //시작 위치 찾기
    for(let i=0;i<rowSize;i++){
        for(let j=0;j<colSize;j++){
            if(maps[i][j] === "S"){
                startPoint = [i, j];
                break;
            }
        }
    }
    const findL = findWay(startPoint, "L");
    if(findL === -1) return -1;
    
    const findE = findWay(findL[1], "E");
    return findE === -1 ? -1 : findL[0]+findE[0];
}