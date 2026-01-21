function solution(book_time) {
    const convertTime = (time) => {
        const [h, m] = time.split(":").map(x=>Number(x));
        return h*60+m;
    }
    const new_book_time = book_time.flatMap(([start, end])=>[
        {type: "start", time: convertTime(start)},
        {type: "end", time: convertTime(end)+10}
    ]);
    //입실 시간과 퇴실 시간이 같다면 퇴실을 먼저 처리해야 함
    new_book_time.sort((a,b)=> a.time-b.time || (a.type==='end' ? -1 : 1));
    
    let room = 0;
    let max = 0;
    for(let book of new_book_time){
        if(book.type === "start"){
            room++;
            max = Math.max(max, room);
        } else{
            room--;
        }
    }
    return max;
}