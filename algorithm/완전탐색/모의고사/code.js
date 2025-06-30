function solution(answers) {
    const answer = [];
    let std1 = "12345"
    let std2 = "21232425"
    let std3 = "3311224455"
    
    std1 = [...std1.repeat(Math.ceil(answers.length/5))].map(x => Number(x));
    std2 = [...std2.repeat(Math.ceil(answers.length/8))].map(x => Number(x));
    std3 = [...std3.repeat(Math.ceil(answers.length/10))].map(x => Number(x));

    const correct1 = std1.filter((value, index) => value === answers[index]).length;
    const correct2 = std2.filter((value, index) => value === answers[index]).length;
    const correct3 = std3.filter((value, index) => value === answers[index]).length;
    
    const maxScore = Math.max(correct1, correct2, correct3);
    
    const scoreMap = new Map();
    scoreMap.set(1, correct1);
    scoreMap.set(2, correct2);
    scoreMap.set(3, correct3);
    
    for(let [student, score] of scoreMap){
        if(score === maxScore)
            answer.push(student);
    }
    
    return answer.sort((a,b)=>a-b);
}
