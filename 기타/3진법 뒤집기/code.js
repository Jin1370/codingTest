function solution(n) {
    let answer = 0;
    let reversed3 = [];
    while(n !== 0){
        reversed3.push(n % 3);
        n = Math.floor(n / 3);
    }
    for(let i=0;i<reversed3.length;i++){
        answer += (3**(reversed3.length-i-1))*reversed3[i];
    }
    
    return answer;
}

//다른 풀이
function solution(n) {
    return parseInt([...n.toString(3)].reverse().join(''), 3);
}
