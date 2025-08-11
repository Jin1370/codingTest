function solution(people, limit) {
    people.sort((a, b) => a - b);
    let start = 0;
    let end = people.length - 1;
    let boats = 0;

    while (start <= end) {
        if (people[start]+people[end]<=limit) {
            start++;
        }
        end--;
        boats++;
    }

    return boats;
}
