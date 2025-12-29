function solution(m, n, board) {
    let count = 0;
    //블록 지워지면 떨어져야 함-> 열 단위로 아래 블록부터 2차원배열 arr에 삽입
    const arr = new Array(n).fill(null).map(()=>[]);
    //똑같은 크기의 배열 deleted에 true, false 저장
    const deleted = new Array(n).fill(null).map(()=> new Array(m).fill(null).map(()=>false))
    for(let i=board.length-1;i>=0;i--){
        for(let j=0;j<n;j++){
            arr[j].push(board[i][j]);
        }
    }
    
    let is_deleted = true;
    while(is_deleted){
        is_deleted = false;
        //2*2배치가 있으면 deleted 배열 같은 위치에 true 저장
        for(let i=0;i<arr.length-1;i++){
            for(let j=0;j<arr[i].length-1;j++){
                if(arr[i][j] && arr[i][j] === arr[i][j+1] && arr[i][j] === arr[i+1][j] && arr[i][j] === arr[i+1][j+1]){
                    deleted[i][j] = true;
                    deleted[i][j+1] = true;
                    deleted[i+1][j] = true;
                    deleted[i+1][j+1] = true;
                    is_deleted = true;
                }
            }
        }
        //블록이 지워진 경우
        if(is_deleted){
            for(let i=0;i<deleted.length;i++){
                let indexChange = 0;
                for(let j=0;j<deleted[i].length;j++){
                    if(deleted[i][j] === true){
                        count++;
                        arr[i].splice(j-indexChange, 1);
                        indexChange++;
                        deleted[i][j] = false
                    }
                }
            }
        }
    }
    //더이상 지워지는 블록이 없는 경우
    return count;
}