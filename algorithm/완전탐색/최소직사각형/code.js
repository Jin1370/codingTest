function solution(sizes) {
    let width = [];
    let length = [];
    for(let x of sizes){
        width.push(Math.max(x[0], x[1]));
        length.push(Math.min(x[0], x[1]));
        maxWidth = width.reduce((a, c)=> {
            if(a<c) a = c;
            return a;
        })
        maxLength = length.reduce((a, c)=> {
            if(a<c) a = c;
            return a;
        })
    }
    return maxWidth * maxLength;
}
