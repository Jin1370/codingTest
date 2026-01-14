def solution(sequence, k):
    p1 = p2 = len(sequence)-1
    current_sum = sequence[-1]
    
    while current_sum != k :
        if current_sum > k :
            if p1 == p2:
                p1-=1
                current_sum+=sequence[p1]
            current_sum-=sequence[p2]
            p2-=1
        elif current_sum < k :
            p1-=1
            current_sum+=sequence[p1]
            
    while sequence[p2] == sequence[p1-1] and p1 > 0 :
        p1, p2 = p1-1, p2-1
        
    return [p1, p2]