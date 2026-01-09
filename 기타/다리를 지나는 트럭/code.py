from collections import deque

def solution(bridge_length, weight, truck_weights):
    bridge = deque([0]*bridge_length)
    truck_weights = deque(truck_weights)
    
    bridge_sum = 0
    time = 0
    
    while bridge:
        time+= 1
        out = bridge.popleft()
        bridge_sum -= out
        
        if truck_weights:
            if bridge_sum + truck_weights[0] <= weight:
                truck = truck_weights.popleft()
                bridge.append(truck)
                bridge_sum += truck
            else:
                bridge.append(0)
        
    return time
