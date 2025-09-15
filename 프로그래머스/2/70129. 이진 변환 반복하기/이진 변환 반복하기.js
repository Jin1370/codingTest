function solution(s) {
    let changeNum = 0, zeroNum = 0;
    while(s!=="1"){
        s = s.split("").map(num => {
            if(num === '0'){
                zeroNum++
                return ""
            }
            else return num
        }).join("");
        s = s.length.toString(2);
        changeNum++;
    }
    return [changeNum, zeroNum]
}