function solution(cacheSize, cities) {
    let queue = [];
    let runtime = 0;
    for(let city of cities){
        city = city.toLowerCase();
        let index = queue.indexOf(city); //없으면 -1 반환
        //cache hit
        if (index !== -1) {
            queue.splice(index, 1);
            queue.push(city);
            runtime++;
        } else { //cache miss
            if(queue.length===cacheSize && cacheSize>0) queue.shift();
            if(cacheSize>0) queue.push(city);
            runtime += 5;
        }
    }
    return runtime;
}
