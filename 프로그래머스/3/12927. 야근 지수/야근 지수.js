function solution(n, works) {
    if(works.reduce((a,b)=>a+b, 0) <= n) return 0;
    works.sort((a,b)=>b-a);
    while(n > 0){
        let maxVal = works[0];
        for(let i=0;i<works.length;i++){
            if(works[i]===maxVal && n>0){
                works[i] -= 1;
                n--;
            } else{
                break;
            }
        }
    }
    return works.reduce((acc, cur) => acc + cur ** 2, 0);
}