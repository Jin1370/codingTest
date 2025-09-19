function solution(n) {
    let numOf1 = 0;
    n.toString('2').split('').forEach(x=> {if(x==='1') numOf1++});
    while(1){
        n++;
        let count = 0;
        n.toString('2').split('').forEach(x=> {if(x==='1') count++});
        if(count === numOf1) return n;
    }
}
