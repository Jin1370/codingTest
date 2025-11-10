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
        
        //좌표 이동이 일어난 경우 기존 경로와 겹치지 않으면 이동한 칸 1추가, path에 현재 경로 추가
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

// 이동한 좌표 자체는 중요x -> 선 자체에 좌표 부여(ex x=0, y=0.5)
// const solution = (dirs) => {
//   let coordinates = {
//     x: 0,
//     y: 0
//   };

//   return dirs.split("").reduce((acc, dir) => {
//     let { x, y } = coordinates;

//     switch (dir) {
//       case "U":
//         if (y === 5) break;
//         acc.add(`${x}/${y + 0.5}`);
//         coordinates.y++;
//         break;
//       case "D":
//         if (y === -5) break;
//         acc.add(`${x}/${y - 0.5}`);
//         coordinates.y--;
//         break; 
//       case "R":
//         if (x === 5) break;
//         acc.add(`${x + 0.5}/${y}`);
//         coordinates.x++;
//         break;
//       case "L":
//         if (x === -5) break;
//         acc.add(`${x - 0.5}/${y}`);
//         coordinates.x--;
//         break;
//     };

//     return acc;
//   }, new Set()).size;
// };
