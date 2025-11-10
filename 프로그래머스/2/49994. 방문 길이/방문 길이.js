function solution(dirs) {
    let location = [0, 0];
    let path = [];
    let count = 0;
    for(let d of dirs){
        //이전 좌표 저장
        let prevLoc = [...location];
        //좌표 이동
        if(d === "U" && (location[1]+1)<=5) location[1]++
        else if(d=== "D" && (location[1]-1)>=-5) location[1]--;
        else if(d=== "R" && (location[0]+1)<=5) location[0]++;
        else if(d=== "L" && (location[0]-1)>=-5) location[0]--;
        
        //좌표 이동이 일어난 경우 path에 추가, 기존 path와 겹치지 않으면 1추가
        if(prevLoc[0] !== location[0] || prevLoc[1] !== location[1]){ 
            let path1 = `${prevLoc[0]},${prevLoc[1]}->${location[0]},${location[1]}`;
            let path2 = `${location[0]},${location[1]}->${prevLoc[0]},${prevLoc[1]}`;
            if(!path.includes(path1) && !path.includes(path2)){
                count++;
                path.push(path1, path2);
            }
        }
    }
    return count;
}