function solution(s) {
    s = s.split("");
    for(let i=0;i<s.length;i+=2){
        if(s[i]!==" "){
            s[i] = s[i].toUpperCase();
        }
        else{
            i--;
            continue;
        }
        if(s[i+1]){
            s[i+1] = s[i+1].toLowerCase();
        }
    }
    return s.join("");
}