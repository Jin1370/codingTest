function solution(n, s) {
    const quotient = Math.floor(s/n);
    const rest = s%n;
    
    if(quotient<1) return [-1];
    const answer = Array(n-rest).fill(quotient);
    for(let i=0;i<rest;i++) answer.push(quotient+1);
    
    return answer;
    
}
