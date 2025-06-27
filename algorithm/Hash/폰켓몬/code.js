function solution(nums) {
    const myMap = new Map();
    let answer = 0;
    for(let i=0;i<nums.length;i++){
        let count = myMap.get(nums[i]) || 0;
        if(count === 0){
            answer++;
            console.log(answer);
            if(answer>nums.length/2)
                return answer-1;
        }
        myMap.set(nums[i], count+1);
    }
    return answer;
}
