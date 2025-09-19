function solution(n) {
    var answer = 0;
    
    for(let i=1;i<=n;i++){
        let sum = 0;
        let digit = i;
        while(sum<n){
            sum += digit++;
        }
        if(sum===n) answer++;
    }
    return answer;
}