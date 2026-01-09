function solution(bridge_length, weight, truck_weights) {
    let bridge = Array(bridge_length).fill(0);
    let bridge_sum = 0;
    let time = 0;
    
    while(bridge.length > 0){
        bridge_sum -= bridge.shift();
        if(truck_weights.length > 0){
            if(bridge_sum + truck_weights[0] <= weight){
                let truck = truck_weights.shift();
                bridge.push(truck);
                bridge_sum += truck;
            } else{
                bridge.push(0);
            }
        }
        time++;
    }
    return time;
}