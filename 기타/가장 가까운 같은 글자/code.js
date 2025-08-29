function solution(s) {
    let answer = [];
    for(let i=0;i<s.length;i++){
        let count = 0;
        let first = true;
        for(let j=i-1;j>=0;j--){
            count++;
            if(s[i] === s[j]){
                first = false;
                answer.push(count);
                break;
            }
        }
        if(first === true) answer.push(-1);
    }
    return answer;
}
