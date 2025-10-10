function solution(n, words) {
    const mySet = new Set();
    let answer;
    let firstFound = 200;
    for(let i = 0;i<words.length-1;i++){
        if(words[i][words[i].length-1]!==words[i+1][0]){
            answer = [(i+1)%n +1, Math.floor((i+1)/n) +1];
            firstFound = i+1;
            break;
        }
    }
    for(let i = 0;i<words.length;i++){
        if(mySet.has(words[i]) && i<firstFound){
            answer = [i%n+1, Math.floor(i/n)+1];
            firstFound = i;
            break;
        } 
        mySet.add(words[i]);
    }
    return firstFound!==200 ? answer : [0,0];
}