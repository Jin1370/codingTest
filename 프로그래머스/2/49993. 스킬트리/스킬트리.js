function solution(skill, skill_trees) {
    const myMap = new Map();
    let count = 0;
    
    skill.split("").forEach((skill, idx) => myMap.set(skill, idx));
    skill_trees.forEach(skill_tree => {
        let possible = true;
        let priority = -1;
        for(let skill of skill_tree.split("")){
            if(myMap.has(skill) && myMap.get(skill) !== priority + 1){
                possible = false;
                break;
            } else if(myMap.has(skill)) priority++;
        }
        if(possible) count++;
    })
    return count;
}