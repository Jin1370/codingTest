class MinHeap {
    constructor() { this.heap = []; }
    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        while (i > 0) {
            let parent = Math.floor((i-1)/2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let i = 0;
        const n = this.heap.length;
        while (true) {
            let left = 2*i + 1, right = 2*i + 2, smallest = i;
            if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === i) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
        return min;
    }
}

function solution(scoville, K) {
    let count = 0;
    const heap = new MinHeap();
    scoville.forEach(s => heap.push(s));

    while (heap.heap[0] < K) {
        if (heap.heap.length < 2) return -1;
        const first = heap.pop();
        const second = heap.pop();
        heap.push(first + second*2);
        count++;
    }
    return count;
}
