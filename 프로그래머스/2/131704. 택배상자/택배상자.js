function solution(order) {
    //컨베이어 벨트 끝에 있는 상자(꺼낼 수 있는 상자)
    let lastBox = 1;
    //보조 컨베이어 벨트
    let spareCb = [];
    let count = 0;
    
    for(let box of order){
        if(lastBox <= box){
            for(let i=lastBox;i<box;i++) spareCb.push(i);
            lastBox = box+1;
            count++;
        } else{
            if(spareCb[spareCb.length-1] === box){
                spareCb.pop();
                count++;
            } else return count;
        }
    }
    return count;
}

//컨베이어 벨트 5-4-3-2-1
//보조 컨베이어 벨트 ?-?-?-?-?