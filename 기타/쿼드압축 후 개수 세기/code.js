function solution(arr) {
    const resultArr = [];
    function compress(array){
        // 배열 안에 숫자 하나뿐이면 그대로 resultArr에 넣고 return
        if(array.length === 1){
            resultArr.push(array[0][0]);
            return;
        }
        // 배열 안의 모든 숫자가 같으면 해당 숫자를 resultArr에 넣고 return
        let same = true;
        for(let row of array){
            for(let i=0;i<row.length-1;i++){
                if(row[i] !== row[i+1]){
                    same = false;
                    break;
                }
            }
            if(!same) break;
        }
        for(let i=0;i<array.length-1;i++){
            if(array[i][0] !== array[i+1][0]){
                same = false;
                break;
            }
        }
        if(same){
            resultArr.push(array[0][0]);            
            return;
        }
        // 배열 안의 모든 숫자가 같지 않으면 넷으로 나누어 반복
        const [ul, ur, dl, dr] = divide(array);
        compress(ul);
        compress(ur);
        compress(dl);
        compress(dr);
    }
    
    function divide(array){
        const ul = [];
        for(let i=0;i<array.length/2;i++){
            ul.push(array[i].slice(0, array[0].length/2));
        }
        const ur = [];
        for(let i=0;i<array.length/2;i++){
            ur.push(array[i].slice(array[0].length/2));
        }
        const dl = [];
        for(let i=array.length/2;i<array.length;i++){
            dl.push(array[i].slice(0, array[0].length/2));
        }
        const dr = [];
        for(let i=array.length/2;i<array.length;i++){
            dr.push(array[i].slice(array[0].length/2));
        }
        return [ul, ur, dl, dr];
    }
    
    compress(arr);
    let num1 = resultArr.reduce((acc, cur)=>acc+cur);
    return [resultArr.length-num1, num1];
}
