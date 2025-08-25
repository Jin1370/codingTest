function solution(number) {
    let answer = 0;
    
    function dfs(index, sum, count){
        if(count === 3){
            if(sum === 0) answer++;
            return;
        }
        for(index;index<number.length;index++){
            dfs(index+1, sum+number[index], count+1);
        }
    }
    dfs(0, 0, 0);
    return answer;
}
