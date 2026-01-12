function solution(n) {
    let row = -1;
    let col = 0;
    let num = 1;
    let repeat = n;
    const arr = Array.from({length:n}, () => []);
    
    while(repeat>0){
        for(let j=0;j<repeat;j++){
            arr[++row][col] = num++;
        }
        repeat--;
        for(let j=0;j<repeat;j++){
            arr[row][++col] = num++;
        }
        repeat--;
        for(let j=0;j<repeat;j++){
            arr[--row][--col] = num++;
        }
        repeat--;
    }
    
    return(arr.flat());
}
