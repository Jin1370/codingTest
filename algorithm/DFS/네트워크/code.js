function solution(n, computers) {
    const visited = Array(n).fill(false);
    let countVisited = 0;
    let visitNext = 0;
    let answer = 0;

    while(countVisited < n){
        for(let i=0;i<visited.length;i++){
            if(visited[i]===false){
                visitNext = i;
                visited[i] = true;
                break;
            }
        }
        const stack = [visitNext];
        while(stack.length){
            const node = stack.pop();
            countVisited++;
            for(let i=0;i<n;i++){
                if(computers[node][i]===1 && visited[i]===false){
                    visited[i]=true;
                    stack.push(i);
                }
            }
        }
        answer++;
    }
    return answer;
}
