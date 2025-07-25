function solution(citations) {
    citations.sort((a,b)=>b-a);
    for(let i=citations.length;i>0;i--){
        let count = 0;
        citations.forEach(x=>{
            if(i<=x) count++;
        })
        if(count>=i) return i;
    }
    return 0;
}
