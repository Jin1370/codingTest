function solution(n, wires) {
    let answer = n;

    const graph = Array.from({ length: n + 1 }, () => []);
    wires.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

    for (let [a, b] of wires) {
        answer = Math.min(answer, getDiff(a, b));
    }

    function getDiff(a, b) {
        const visited = Array(n + 1).fill(false);
        visited[b] = true;

        let count = 0;
        const queue = [a];
        visited[a] = true;

        while (queue.length) {
            const cur = queue.shift();
            count++;
            for (let next of graph[cur]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                }
            }
        }

        return Math.abs(count - (n - count));
    }

    return answer;
}