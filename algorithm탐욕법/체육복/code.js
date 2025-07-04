// 기존 풀이
function solution(n, lost, reserve) {
    let i=0, j=0, borrowed=0;
    const lostNum = lost.length;
    
    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);
    
    console.log([1, 3, 4].splice(1,1));
    for(let i=0;i<lost.length;i++){
        for(let j=0;j<reserve.length;j++){
            if(lost[i]===reserve[j]){
                lost.splice(i,1);
                reserve.splice(j,1);
                i--;
                j--;
                borrowed +=1
            }
        }
    }
    
    while(lost.length!==0 && reserve.length!==0){
        if(lost[i]>reserve[j]){
            if(lost[i]-1 === reserve[j]){
                borrowed +=1
                i++;
            }
            j++;
        }
        else{
            if(lost[i]+1===reserve[j]){
                borrowed +=1
                j++;
            }
            i++;
        }
        if(i===lost.length || j===reserve.length)
            break;
    }
    return n-(lostNum-borrowed);
}

//개선
function solution(n, lost, reserve) {
    const realLost = lost.filter(l => !reserve.includes(l));
    const realReserve = reserve.filter(r => !lost.includes(r));

    realLost.sort((a, b) => a - b);
    realReserve.sort((a, b) => a - b);

    let count = n - realLost.length;

    for (let i = 0; i < realLost.length; i++) {
        const lostStudent = realLost[i];
        const idx = realReserve.findIndex(r => Math.abs(r - lostStudent) === 1);
        if (idx !== -1) {
            count++;
            realReserve.splice(idx, 1);
        }
    }
    return count;
}

