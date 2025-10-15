function solution(want, number, discount) {
    //Map객체에 할인 중인 제품을 (제품, 수량) 형태로 저장. 첫째날부터 시작해 10일 단위로 저장
    const myMap = new Map();
    for(let i=0;i<10;i++){
        myMap.set(discount[i], (myMap.get(discount[i])||0)+1);
    }
    let numOfDays = 0;
    
    //회원가입 날짜를 하루씩 뒤로 미뤄가면서 모든 할인 제품 및 수량이 원하는 제품 및 수량과 일치하는지 체크
    for(let i=0;i<=discount.length-10;i++){
        let discountAll = true;
        for(let j=0;j<want.length;j++){
            if(myMap.get(want[j])!==number[j]){
                discountAll = false;
                break;
            }
        }
        if(discountAll) numOfDays++;
        
        if(myMap.get(discount[i])>0){
            myMap.set(discount[i], myMap.get(discount[i])-1);
        }
        myMap.set(discount[i+10], (myMap.get(discount[i+10])||0)+1)
    }
    return numOfDays;
}