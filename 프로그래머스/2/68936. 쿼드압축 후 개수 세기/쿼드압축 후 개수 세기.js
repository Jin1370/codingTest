function solution(arr) {
    let zeros = 0;
    let ones = 0;
    
    function compress(r, c, size){
        // 배열 안의 모든 숫자가 같을 때
        let same = true;
        let firstElem = arr[r][c];
        check: for(let i=r;i<r+size;i++){
            for(let j=c;j<c+size;j++){
                if(firstElem !== arr[i][j]){
                    same = false;
                    break check;
                }
            }
        }
        if(same){
            firstElem === 0 ? zeros++ : ones++;
            return;
        }
        // 배열 안의 모든 숫자가 같지 않으면 넷으로 나누어 반복
        const half = size / 2;
        compress(r, c, half);
        compress(r+half, c, half);
        compress(r, c+half, half);
        compress(r+half, c+half, half);
    }
    compress(0, 0, arr.length);
    return [zeros, ones];
}