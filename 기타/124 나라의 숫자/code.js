function solution(n) {
    let answer = '';
    const numbers = ['4', '1', '2'];
    
    while(n>0){
        const remainder = n % 3;
        n = Math.floor(n / 3);
        if(remainder === 0){
            //나머지가 0이면 몫에서 1을 빼줌
            n-=1;
        }
        answer = numbers[remainder] + answer;
    }
    
    return answer;
}
