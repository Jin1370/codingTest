function solution(s, n) {
    return s = s.split("").map(ch => {
        let ascii = ch.charCodeAt(0)
        if(65<=ascii && ascii<=90){
            ascii = ((ascii - 65) + n) % 26  + 65;
        }
        else if(97<=ascii && ascii<=122)
            ascii = ((ascii - 97) + n) % 26  + 97;
        return String.fromCharCode(ascii);
    }).join("")
}