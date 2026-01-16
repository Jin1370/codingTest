def solution(storey):
    count = 0
    while storey:
        current = storey % 10
        next_ = (storey//10)%10
        if current<5 or (current==5 and next_<5):
            count += current
            storey = storey//10
        else:
            count += (10-current)
            storey = storey//10+1
            
    return count