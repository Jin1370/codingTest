function solution(n, s) {
    const quotient = Math.floor(s/n);
    const remain = s%n;
    
    if(quotient<1) return [-1];
    const answer = Array(n-remain).fill(quotient);
    for(let i=0;i<remain;i++) answer.push(quotient+1);
    
    return answer;
}
