function solution(m, n, puddles) {
    const grid = Array.from({length:n}, ()=>Array(m).fill(null));
    grid[0][0] = 1;
    for(let [x,y] of puddles){
        grid[y-1][x-1] = 0;
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(grid[i][j]===null){
                if(i>0 && j>0)
                    grid[i][j] = (grid[i-1][j] + grid[i][j-1])%1000000007;
                else if(i>0)
                    grid[i][j] = grid[i-1][j];
                else
                    grid[i][j] = grid[i][j-1];
            }
        }
    }
    return grid[n-1][m-1];
}