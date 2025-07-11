function solution(progresses, speeds) {
    let remains = [];
    let answer = [];
    let count = 0;
    for(let i=0;i<progresses.length;i++){
        remains.push(Math.ceil((100-progresses[i])/speeds[i]));
    }
    
    let num = remains[0];
    for(let i=0;i<remains.length;i++){
        count++;
        if(num < remains[i+1] || i===remains.length-1){
            answer.push(count);
            count = 0;
            num = remains[i+1];
        }
    }
    return answer;
}