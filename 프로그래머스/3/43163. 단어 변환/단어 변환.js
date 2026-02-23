function solution(begin, target, words) {
    let queue = [[begin,0]];
    const visited = new Set();
    while(queue.length){
        const [currentWord, count] = queue.shift();
        for(let word of words){
            let canChange = true;
            let countDiff = 0;
            for(let i=0;i<currentWord.length;i++){
                if(word[i]!==currentWord[i]){
                    countDiff++;
                    if(countDiff > 1){
                        canChange = false;
                        break;
                    }
                }
            }
            if(canChange && !visited.has(word)){
                if(word===target) return count+1;
                visited.add(word);
                queue.push([word, count+1]);
            }
        }
    }
    return 0;
}