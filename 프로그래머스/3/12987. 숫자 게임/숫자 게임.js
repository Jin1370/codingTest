function solution(A, B) {
    A = A.map(num=>['A', num]);
    B = B.map(num=>['B', num]);
    const allNum = [...A, ...B].sort((a,b)=>b[1]-a[1]);
    let spareB = 0;
    let point = 0;
    
    for(let num of allNum){
        if(num[0]==='B') spareB++;
        else if(spareB > 0){
            spareB--;
            point++;
        }
    }
    return point;
}
