function solution(files) {
    const fileInform = [];
    const answer = [];
    files.forEach(file=>{
        let fileName = file;
        let idx = 0;
        let head = "";
        let number = "";
        
        file = file.split("");
        //숫자가 아닌 문자를 head로 저장. 공백은 숫자 변환 시 0이 되므로 isNaN 결과가 false -> 따로 처리
        while(Number.isNaN(Number(file[idx])) || file[idx]===" "){
            head += file[idx];
            idx++;
        }
        //숫자를 number로 저장
        while(!Number.isNaN(Number(file[idx]))){
            if(number.length>=5) break;
            number += file[idx];
            idx++;
        }
        //객체배열에 각 파일 정보 저장. head는 소문자 변환, number는 숫자 변환(앞의 0 제거)
        fileInform.push({fileName: fileName, head: head.toLowerCase(), number: Number(number)});
    })
    //number 기반 정렬
    fileInform.sort((a,b)=>a.number - b.number);
    //head 기반 정렬
    fileInform.sort((a,b)=>a.head.localeCompare(b.head));
    //정렬된 파일명 answer 배열에 저장
    fileInform.forEach(file=>answer.push(file.fileName));
    
    return answer;
}
