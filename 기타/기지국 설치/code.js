function solution(n, stations, w) {
    let answer = 0;
    let cursor = 1;
    let i = 0;
    const coverage = 2 * w + 1;

    while (i < stations.length) {
        if (cursor < stations[i] - w) {
            let gap = (stations[i] - w) - cursor;
            answer += (gap % coverage === 0) ? (gap / coverage) : Math.floor(gap / coverage) + 1;
        }
        cursor = stations[i] + w + 1;
        i++;
    }

    if (cursor <= n) {
        let gap = n - cursor + 1;
        answer += (gap % coverage === 0) ? (gap / coverage) : Math.floor(gap / coverage) + 1;
    }

    return answer;
}
