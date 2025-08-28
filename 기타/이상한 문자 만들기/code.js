// 시도
// function solution(s) {
//     s = s.split("");
//     for(let i=0;i<s.length;i+=2){
//         if(s[i]!==" "){
//             s[i] = s[i].toUpperCase();
//         }
//         else{
//             i--;
//             continue;
//         }
//         if(s[i+1] && s[i+1]!==" "){
//             s[i+1] = s[i+1].toLowerCase();
//         }
//     }
//     return s.join("");
// }

// 개선
function solution(s) {
    return s
        .split(" ")
        .map(word =>
            word
                .split("")
                .map((ch, idx) =>
                    idx % 2 === 0 
                        ? ch.toUpperCase()
                        : ch.toLowerCase()
                )
                .join("")
        )
        .join(" ");
}
