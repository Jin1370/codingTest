function solution(numbers) {
    const answer = [];
    for(let number of numbers){
        let bit = [0, ...number.toString(2).split("").map(x=>Number(x))];
        //비트 마지막이 0 -> 단순히 1 더함
        if(bit[bit.length-1] === 0) answer.push(number+1);
        //비트 마지막이 1 -> 가장 오른쪽의 0을 1로 바꾸고, 나머지는 그대로 쓰되 첫번째만 0으로 씀
        else{
            let newbit = bit.slice();
            for(let i=newbit.length-1;i>=0;i--){
                if(newbit[i] === 0){
                    newbit[i] = 1;
                    newbit[i+1] = 0;
                    break;
                }
            }
            answer.push(parseInt(newbit.join(""), 2));
        }
    }
    return answer;
}