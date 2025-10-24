function solution(n,a,b)
{
    let twoSquared = Math.log2(n);
    let start = 1;
    let end = n;
    
    for(let i=0;i<twoSquared;i++){
        let middle = start+(end-start+1)/2;
        if(a<middle && b<middle){
            end = middle-1;
        }
        else if(a>=middle && b>=middle){
            start=middle;
        }
        else return twoSquared-i;
    }
}