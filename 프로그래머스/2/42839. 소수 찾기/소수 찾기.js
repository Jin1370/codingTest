function solution(numbers) {
    const nums = numbers.split('');
    const set = new Set();
    
    function getPermutations(arr, prefix=''){
        if(prefix) set.add(Number(prefix));
        for(let i=0;i<arr.length;i++){
            const next = arr.slice();
            next.splice(i, 1);
            getPermutations(next, prefix + arr[i]);
        }
    }
    
    getPermutations(nums);
    
    function isPrime(n){
        if(n<2) return false;
        for(let i=2;i<=Math.sqrt(n);i++){
            if(n%i===0) return false;
        }
        return true;
    }
    
    let count = 0;
    set.forEach(num => {
        if(isPrime(num)) count++;
    });
    
    return count;
}