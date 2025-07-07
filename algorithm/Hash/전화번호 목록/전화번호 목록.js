function solution(phone_book) {
    const mySet = new Set(phone_book);
    
    for(let number of phone_book){
        for(let i=0;i<number.length-1;i++){
            if(mySet.has(number.slice(0,i+1)))
                return false;    
        }
    }
    return true;
}
