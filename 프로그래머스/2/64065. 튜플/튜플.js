function solution(s) {
    //문자열 배열로 변환
    let subsets = [];
    let idx = -1;
    let num = 0;
    s = s.slice(1, -1) + ',';
    for(let ch of s){
        if(ch === '{'){
            subsets.push([]);
            idx++;
        } else if(ch ===','){
            subsets[idx].push(num);
            num = 0;
        } else if(ch !== '}'){ //ch가 숫자이면
            num = num * 10 + Number(ch);
        }
    }
    
    //부분집합 크기 기준 오름차순 정렬
    subsets.sort((a, b)=>a.length - b.length);
    
    //각각의 부분집합에서 중복되지 않는 원소 고르기
    const mySet = new Set();
    let tuple = [];
    subsets.forEach(subset => {
        subset.forEach(num => {
            if(!mySet.has(num)){
                mySet.add(num);
                tuple.push(num);
            }
        })
    })
    return tuple;
}