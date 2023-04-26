function showStaircase(number){
    let staircaseComplete = "";

    for(let level = 1;  level <= number; level++){

        let staircase = "";
        
        for(let steps = 1; steps <= level; steps++){
            staircase += "[-]";
        }
        staircaseComplete += staircase + "\n";    
    }
    return staircaseComplete;
    
}

module.exports = showStaircase;

