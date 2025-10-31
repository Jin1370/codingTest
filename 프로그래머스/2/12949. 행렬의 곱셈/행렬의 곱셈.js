function solution(arr1, arr2) {
    let answer = [];
    for(let i=0;i<arr1.length;i++){ //arr1 행 개수
        let row = [];
        for(let j=0;j<arr2[0].length;j++){ //arr2 열 개수
            let sum = 0;
            for(let k=0;k<arr1[0].length;k++){ //arr1 열 개수
                sum += arr1[i][k] * arr2[k][j]
            }
            row.push(sum);
        }
        answer.push(row);
    }
    return answer;
}
// 앞의 열 개수와 뒤의 행 개수가 같을 때만 곱셈 가능
