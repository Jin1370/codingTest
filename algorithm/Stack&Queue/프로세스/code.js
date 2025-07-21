function solution(priorities, location) {
    const newPriorities = [];
    for(let i=0;i<priorities.length;i++){
        newPriorities.push([i, priorities[i]]);
    }
    let execution = [];
    
    while(newPriorities.length>0){
        let temp = newPriorities.shift();
        let executed = true;
        for(let i of newPriorities){
            if(temp[1]<i[1]){
                newPriorities.push(temp);
                executed = false;
                break;
            }
        }
        if(executed)
            execution.push(temp);
    }
    
    for(let i=0;i<execution.length;i++){
        if(execution[i][0]===location)
            return ++i;
    }
}
