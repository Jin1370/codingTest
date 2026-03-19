import math

numOfRoom = int(input())
numOfPeople = list(map(int, input().split()))
mainSup, subSup = map(int, input().split())

answer = 0

for i in range(numOfRoom):
    answer += 1
    if numOfPeople[i] <= mainSup:
        continue
    else:
        answer += math.ceil((numOfPeople[i]-mainSup)/subSup)

print(answer)

