def solution(arr):
    counts = [0, 0]
    
    def compress(r, c, size):
        first_elem = arr[r][c]
        same = True
        
        for i in range(r, r+size):
            for j in range(c, c+size):
                if arr[i][j] != first_elem:
                    same = False
                    break
                if not same:
                    break
        if same:
            if first_elem == 0:
                counts[0] += 1
            else:
                counts[1] += 1
            return
        
        half = size // 2
        compress(r, c, half)
        compress(r+half, c, half)
        compress(r, c+half, half)
        compress(r+half, c+half, half)
        
    compress(0, 0, len(arr))
    return counts
                    