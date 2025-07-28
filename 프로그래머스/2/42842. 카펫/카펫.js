function solution(brown, yellow) {
    let divisor = [];
    numOfTile = brown + yellow;
    
    for(let i=numOfTile;i>0;i--){
        if(numOfTile%i==0){
            let x = numOfTile/i;
            if((i-2)*(x-2)===yellow)
                return [i, x];
        }
    }
}
