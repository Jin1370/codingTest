n = int(input())
days = []
money = []

for _ in range(n):
    t, p = map(int, input().split())
    days.append(t)
    money.append(p)

dp = [0] * (n + 1)

for i in range(n-1, -1, -1):
    if i + days[i] <= n:
        dp[i] = max(dp[i+1], money[i] + dp[i+days[i]])
    else:
        dp[i] = dp[i+1]

print(dp[0])