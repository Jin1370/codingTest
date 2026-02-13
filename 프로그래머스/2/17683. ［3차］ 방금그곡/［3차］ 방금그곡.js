function solution(m, musicinfos) {
    const replaceNotes = (s) => {
        return s.replace(/C#/g, 'c')
                .replace(/D#/g, 'd')
                .replace(/F#/g, 'f')
                .replace(/G#/g, 'g')
                .replace(/A#/g, 'a')
                .replace(/B#/g, 'b');
    };

    const targetMelody = replaceNotes(m);
    const answerCandidates = [];

    for (let i = 0; i < musicinfos.length; i++) {
        let [start, end, title, sheet] = musicinfos[i].split(",");
        
        const [startH, startM] = start.split(":").map(Number);
        const [endH, endM] = end.split(":").map(Number);
        const duration = (endH * 60 + endM) - (startH * 60 + startM);

        const replacedSheet = replaceNotes(sheet);
        const fullMelody = replacedSheet.repeat(Math.ceil(duration / replacedSheet.length))
                                        .substring(0, duration);

        if (fullMelody.includes(targetMelody)) {
            answerCandidates.push({ title, duration, index: i });
        }
    }

    if (answerCandidates.length === 0) return "(None)";

    answerCandidates.sort((a, b) => {
        if (b.duration !== a.duration) return b.duration - a.duration;
        return a.index - b.index;
    });

    return answerCandidates[0].title;
}