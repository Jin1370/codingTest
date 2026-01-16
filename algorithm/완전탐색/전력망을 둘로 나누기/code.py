from collections import deque

def solution(n, wires):
    # 인접리스트로 그래프 만들기
    graph = [[] for _ in range(n+1)]
    for a, b in wires:
        graph[a].append(b)
        graph[b].append(a)
        
    # 특정 전선을 끊었을 때 두 전력망의 차이를 구하는 함수
    def get_diff(a, b):
        visited = [False] * (n+1)
        visited[b] = True
        
        queue = deque([a])
        visited[a] = True
        count = 0
        
        while queue:
            cur = queue.popleft()
            count += 1
            
            for next_node in graph[cur]:
                if not visited[next_node]:
                    visited[next_node] = True
                    queue.append(next_node)
                    
        return abs(count - (n - count))
    
    # 모든 전선을 하나씩 끊으며 최솟값 찾기
    min_diff = n
    for a, b in wires:
        min_diff = min(min_diff, get_diff(a, b))
        
    return min_diff
