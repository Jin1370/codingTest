function solution(routes) {
    let cameraPoint = -30001;
    let cameraCount = 0;
    routes.sort((a,b)=>a[1]-b[1]);
    
    for(let route of routes){
        if(route[0] > cameraPoint){
            cameraPoint = route[1];
            cameraCount++;
        }
    }
    
    return cameraCount;
}