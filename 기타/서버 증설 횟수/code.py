from collections import deque

def solution(players, m, k):
    answer = 0
    servers = deque()
    active_server_count = 0
    
    for i in range(len(players)):
        current_time = i
        player_count = players[i]
        
        while servers and servers[0][1] <= current_time:
            expired_count, _ = servers.popleft()
            active_server_count -= expired_count
            
        needed_total = player_count // m
        
        if active_server_count < needed_total:
            new_servers = needed_total - active_server_count
            servers.append([new_servers, current_time + k])
            answer += new_servers
            active_server_count += new_servers
            
    return answer
