function solution(s){
    let num=0;
    for(x of s){
        if(x==='(')
            num++;
        else if(x===')'){
            num--;
        }
        if(num<0) return false;
    }
    return num===0 ? true : false;
}
